import { Link } from "react-router-dom";
import "./adminpage.css";

const Work = () => {
  return (
    <div className="work__container">
      <p>
        Contact us on +234 1234 5678 and tell us how we can assist you or click
        on the button below to chat with us
      </p>
      <Link to="/signup">Chat with us</Link>
    </div>
  );
};

export default Work;
