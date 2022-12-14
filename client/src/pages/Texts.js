import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "../pages/chats.css";
import { Link } from "react-router-dom";

const Texts = () => {
  // const [texts, setTexts] = useState("");
  const handleMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text__container">
      <div className="chat__header">
        <Link to="/chat">
          <ArrowBackIcon />
        </Link>
        <div className="user__img">
          <img
            src="https://www.caa.com/caaspeakers/partyHeadshot/hailee-steinfeld.png"
            alt=""
          />
        </div>
      </div>
      <div className="textssss">
        <div className="xender">
          <div>
            <p>Whats up bro ??</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="xender">
          <div>
            <p>Whats up bro ??</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="receiver">
          <div>
            <p>Im fine yoo</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="xender">
          <div>
            <p>Had dinner yet ??</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="receiver">
          <div>
            <p>No bro, just about to</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="receiver">
          <div>
            <p>where your girl at ?</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="xender">
          <div>
            <p>Right here man</p>
            <small>12:22</small>
          </div>
        </div>
        <div className="receiver">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              corrupti iste, quasi voluptatibus, sint harum architecto modi
              minus facilis numquam reiciendis aut voluptatem repudiandae?
              Molestias veritatis ullam minima. Quaerat, beatae.
            </p>
            <small>12:22</small>
          </div>
        </div>
        <div className="xender">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem quam tempore vitae facere perferendis deleniti
              voluptatum ea quo non minus illo, dolorum quisquam delectus. Eos
              expedita totam nobis cumque.
            </p>
            <small>12:22</small>
          </div>
        </div>
        <div className="receiver">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              corrupti iste, quasi voluptatibus, sint harum architecto modi
              minus facilis numquam reiciendis aut voluptatem repudiandae?
              Molestias veritatis ullam minima. Quaerat, beatae.
            </p>
            <small>12:22</small>
          </div>
        </div>
      </div>

      <div className="input__section">
        <input type="text" />
        <InsertEmoticonIcon />
        <SendIcon onClick={handleMessage} />
      </div>
    </div>
  );
};

export default Texts;
