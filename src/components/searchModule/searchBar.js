import { ChatList } from "../chatListModule/ChatList";
import "./searchBarStyle.css";
import NAMES from "../chatData.json";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const list = NAMES["profile"]["friends"];
  const filteredData = list.filter((item) => {
    return item.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <div className="main-search-bar">
      <div className="search-bar-with-functions">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <div className="chat-function-container">
          <span className="clear-search-bar">CLEAR CHAT</span>
          <span className="more-function">MORE</span>
        </div>
      </div>
      <ChatList chatlist={filteredData} />
    </div>
  );
};
