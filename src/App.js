import logo from "./logo.svg";
import "./App.css";
import "./CommonStyle.css";
import { ChatList } from "./components/chatListModule/ChatList";
import { SearchBar } from "./components/searchModule/searchBar";
import { Header } from "./components/header/Header";
import { ChatScreen } from "./components/chatScreen/chatScreen";
import { Profile } from "./components/Profile";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="main-body">
      <Header />
      <Profile />
      <SearchBar />
    </div>
  );
}

export default App;
