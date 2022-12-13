import "./chats.css";
const ChatHeaders = () => {
  return (
    <div className="chatHeader__container">
      <h1>Chats</h1>
      <div className="chatheader__container">
        <div className="chatheader__img">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <div>
          <h3>Stanley Ipkiss</h3>
          <p>hello there...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeaders;
