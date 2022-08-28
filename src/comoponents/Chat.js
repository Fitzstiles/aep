import "./chat.css";
import { Link } from "react-router-dom";
import Messages from "./Messaages";
const Chat = () => {
  return (
    <div className="chat__container">
      <div className="left__chat">
        <div className="chat__header">
          <div className="header__image">
            <img
              src="https://www.themoviedb.org/t/p/original/V5G6zIco8u2u8SJZ16HcCpOsaW.jpg"
              alt=""
            />
          </div>
          <h3>Messages</h3>
        </div>
        <div className="chats">
          <div className="header__image">
            <img
              src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
              alt=""
            />
          </div>
          <Link to="/">
            <div className="details">
              <div className="deatils__d">
                <p>Stanly Ipkiss</p>
                <small>Hello there...</small>
              </div>
              <span>12</span>
            </div>
          </Link>
        </div>
        <div className="chats">
          <div className="header__image">
            <img
              src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
              alt=""
            />
          </div>
          <Link to="/">
            <div className="details">
              <div className="deatils__d">
                <p>Stanly Ipkiss</p>
                <small>Hello there...</small>
              </div>
              <span>12</span>
            </div>
          </Link>
        </div>
        <div className="chats">
          <div className="header__image">
            <img
              src="https://lisarichards.co.uk/wp-content/uploads/2021/05/Ann-Skelly-scaled.jpeg"
              alt=""
            />
          </div>
          <Link to="/">
            <div className="details">
              <p>Stanly Ipkiss</p>
              <span>12</span>
            </div>
          </Link>
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
