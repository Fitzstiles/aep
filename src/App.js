import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";
import Chat from "./comoponents/Chat";
import Signin from "./comoponents/Signin";
import SignUp from "./comoponents/SignUp";
import { useStateValue } from "./comoponents/stateManagement/StateContext";

function App() {
  const { theme } = useStateValue();
  return (
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
