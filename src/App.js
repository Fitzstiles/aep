import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";
import ChatHeaders from "../src/pages/ChatHeaders";
import Signin from "../src/pages/Signin";
import SignUp from "../src/pages/SignUp";
import Texts from "./pages/Texts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat" element={<ChatHeaders />} />
        <Route path="/messages" element={<Texts />} />
      </Routes>
    </div>
  );
}

export default App;
