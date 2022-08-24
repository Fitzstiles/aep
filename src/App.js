import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";
import Chat from "./comoponents/Chat";
import Login from "./comoponents/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/login"
          element={
            <Login
              headers={"Create Account"}
              text={"Already have an account?"}
              link={"Login"}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              headers={"Log in"}
              text={" Type in your email and password"}
            />
          }
        />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
