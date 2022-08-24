import "./chat.css";
const Chat = () => {
  return (
    <div className="chat__container">
      <div className="left__chat">
        <div className="chat__header">
          <img src="./images/snip.PNG" alt="" />
          <h3>Messages</h3>
        </div>
        <div className="chats">
          <img src="./images/snip.PNG" alt="" />
          <div className="details">
            <p>john Doe</p>
            <span>12</span>
          </div>
        </div>
      </div>
      <div className="right__chat"></div>
    </div>
  );
};

export default Chat;
