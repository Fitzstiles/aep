import "./login.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { useState } from "react";

const SignUp = () => {
  // const [email, setEmail] = useState();
  // const [password, setpassword] = useState();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signup(email, password);
  //     navigate("/chat");
  //   } catch (err) {
  //     alert(err);
  //   }
  // };
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
          <form>
            <h1>Create Account</h1>
            <input
              type="email"
              placeholder="Email"
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              // onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit" className="links">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
