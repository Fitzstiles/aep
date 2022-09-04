import "./chats.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Texts = () => {
  return (
    <div className="texts__container">
      <ArrowBackIosNewIcon style={{ marginBottom: 40, marginLeft: 20 }} />
      <div className="textss">
        <div className="text__image">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <p>hello, I need to book an event</p>
      </div>
      <div className="textss">
        <div className="text__image">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <p>hello, I need to book an event</p>
      </div>
      <div className="xender__chat">
        <div className="text__image">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <p>hello, I need to book an event</p>
      </div>
      <div className="xender__chat">
        <div className="text__image">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <p>hello, I need to book an event</p>
      </div>
      <div className="textss">
        <div className="text__image">
          <img
            src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
            alt=""
          />
        </div>
        <p>hello, I need to book an event</p>
      </div>

      <div className="message__box">
        <input type="text" />
        <button type="submit">send</button>
      </div>
    </div>
  );
};

export default Texts;
