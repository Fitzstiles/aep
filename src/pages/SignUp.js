import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        email,
        name,
        password,
      });

      setCookie("Email", response.data.email);
      setCookie("userId", response.data.userId);
      setCookie("AuthToken", response.data.authToken);

      const success = response.status === 201;
      if (success) {
        navigate("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <div className="input_section">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="please enter your name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit} className="links">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
