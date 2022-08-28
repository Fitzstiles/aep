const Messages = () => {
  return (
    <div className="message__container">
      <div className="message__header">
        <div className="messageimg__container">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <div className="user__details">
          <h6>Stanley Ipkiss</h6>
          <p>last seen: 2:45pm</p>
        </div>
      </div>
      <div className="messages">
        <div className="user__messages">
          <div className="user__mssgImg">
            <img
              src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
              alt=""
            />
          </div>
          <p>Hello,I'll like to make a reservation</p>
        </div>
        <div className="sender__messages">
          <div className="user__mssgImg">
            <img
              src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
              alt=""
            />
          </div>
          <p>Hello,I'll like to make a reservation</p>
        </div>
      </div>
      <div className="send__msg">
        <input type="text" />
        <button type="submit">send</button>
      </div>
    </div>
  );
};

export default Messages;
