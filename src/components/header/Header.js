import "./Header.css";
import "./chatBotLogo.png";

export const Header = () => {
  // /media/vishal/661C2F7F1C2F497F/ReactJS/chatbot/src/components/header/chatBotLogo.png
  return (
    <div className="main-header">
      <div className="main-header-left">
        <img
          src={require("./chatBotLogo.png")}
          alt="chatBot"
          className="logo-chatbot"
        />
        <span className="chatBot-text">CHATBOT</span>
      </div>

      <div className="main-header-right">
        <button className="tablinks">TERMS OF USE</button>
        <button className="tablinks">FAQs</button>
        <button className="tablinks">CONTACTS</button>
        <button className="tablinks">CHATS</button>
        <button className="tablinks">HOME</button>
      </div>
    </div>
  );
};
