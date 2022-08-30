import "./chats.css";
import { useStateValue } from "./stateManagement/StateContext";
import Texts from "./Texts";
const ChatHeaders = () => {
  const { handleClick, statechecked } = useStateValue();
  return (
    <div className="chatHeader__container">
      <h1>Chats</h1>
      <div
        onClick={handleClick}
        className={`chatheader__container ${statechecked}`}
      >
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
      <Texts />
    </div>
  );
};

export default ChatHeaders;
