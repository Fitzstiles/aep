import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";
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
          element={<Login headers={"Log in"} text={"Email and password"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
