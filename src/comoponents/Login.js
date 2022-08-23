import "./login.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Login = ({ headers, text, link }) => {
  return (
    <div className="login__container">
      <div className="bg__img">
        <img
          src="https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043964.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="content__container">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
        <div className="input__section">
          <h1>{headers}</h1>
          <p>
            {text} <Link to="/signin">{link}</Link>
          </p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <Link to="/" className="links">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
