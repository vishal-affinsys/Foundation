import "../chatListModule/chatListStyles.css";
import { ChatScreen } from "../chatScreen/chatScreen";
import { useState } from "react";
import NAMES from "../chatData.json";

export const ChatList = (props) => {
  const [friendDetail, setFriend] = useState(props.chatlist[0]);
  const clickHandler = (item, friend) => {
    setFriend(friend);
  };
  return (
    <div>
      <table>
        <tr>
          <td>
            <div className="chat-list">
              {props.chatlist.map((friend) => {
                return (
                  <div
                    key={friend.id}
                    className="main-chat"
                    value={friend.name}
                    onClick={(event) => clickHandler(event, friend)}
                  >
                    <div
                      className="chat-tile"
                      style={{
                        backgroundColor:
                          friend.id === friendDetail.id
                            ? "rgba(194, 194, 194, 0.80)"
                            : "rgba(194, 194, 194, 0.19)",
                        border:
                          friend.id === friendDetail.id ? "dashed" : "none",
                        borderWidth:
                          friend.id === friendDetail.id ? "1px" : "0px",
                      }}
                    >
                      <div>
                        <table>
                          <tr>
                            <td rowSpan={2}>
                              <img
                                src={friend.picture}
                                className="profile-picture"
                              />
                            </td>
                            <td className="chat-tile-title">
                              {friend.name}{" "}
                              <span className="time-stamp">
                                {friend.latest_timestamp}
                              </span>
                            </td>
                          </tr>
                          <tr className="chat-tile-subtitle">
                            <td>{friend.lastChat}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </td>
          <td className="chatScreen">
            <ChatScreen friendDetails={friendDetail} />
          </td>
        </tr>
      </table>
    </div>
  );
};
