import { Link } from "react-router-dom";
import "./adminpage.css";

const Work = () => {
  return (
    <div className="work__container">
      <h1>How does it Work?</h1>
      <p>
        You can call us on +234 1234 5678 or click on the button bellow to chat
        with us
      </p>
      <Link to="/login">Chat with us</Link>
    </div>
  );
};

export default Work;
