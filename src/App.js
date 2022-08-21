import { Routes, Route } from "react-router-dom";
import Body from "./comoponents/Body";

import Login from "./comoponents/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
