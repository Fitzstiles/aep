import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";
import ChatHeaders from "./comoponents/ChatHeaders";
import Signin from "./comoponents/Signin";
import SignUp from "./comoponents/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat" element={<ChatHeaders />} />
      </Routes>
    </div>
  );
}

export default App;
