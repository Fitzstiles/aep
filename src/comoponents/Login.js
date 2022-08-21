import "./login.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Login = () => {
  return (
    <div className="login__container">
      <ArrowBackIosIcon />
      <div className="input__container">
        <h1>Sign up and let's chat</h1>
        <div className="input__section">
          <input type="text" placeholder="Enter your email" />
          <a href="/">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
