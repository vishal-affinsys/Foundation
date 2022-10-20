import "./chatScreen.css";
import NAMES from "../chatData.json";

export const ChatScreen = (props) => {
  const friend = props.friendDetails;
  const chatLogs = NAMES["friends"].filter((item) => {
    if (item.id === friend.id) {
      // console.log(1)
      return item.chatlog;
    } else {
      return;
    }
  });
  //   console.log(chatLogs);
  return (
    <div>
      <div className="chat-tile">
        <table>
          <tr>
            <td rowSpan={2}>
              <img src={friend.picture} className="profile-picture" />
            </td>
            <td className="chat-tile-title">{friend.name} </td>
          </tr>
        </table>
      </div>
      <div className="chat-background-with-sender">
        {chatLogs.map((chat) => {
          const chatlistItem = [].concat(chat.chatlog).reverse();
          return (
            <div key={chat.id} className="chat-background">
              {chatlistItem.map((item) => {
                return (
                  <div
                    className="chatBox"
                    key={item.message_id}
                    style={{
                      justifyContent: item.side,
                    }}
                  >
                    {item.side == "left" ? (
                      <div>
                        <img
                          src={friend.picture}
                          alt="profile-pic"
                          className="chat-profile-pic"
                        />
                        <div className="timestamp">{item.timestamp}</div>
                      </div>
                    ) : (
                      <div className="timestamp">{item.timestamp}</div>
                    )}
                    <span
                      className="text-chat-item"
                      style={{
                        backgroundColor:
                          item.side === "left" ? "white" : "blue",
                        color: item.side === "left" ? "black" : "white",
                        borderBottomRightRadius:
                          item.side === "left" ? "22px" : "0px",
                        borderBottomLeftRadius:
                          item.side === "right" ? "22px" : "0px",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        })}

        <input
          type="text"
          className="message-sender-bar"
          placeholder="Message"
        />
        <button className="send-button">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};
