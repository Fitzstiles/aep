import { Link } from "react-router-dom";
import "./adminpage.css";

const Work = () => {
  return (
    <div className="work__container">
      <p>
        You can call us on +234 1234 5678 and tell us how we can assist you or
        click on the button bellow to chat with us
      </p>
      <Link to="/login">Chat with us</Link>
    </div>
  );
};

export default Work;
