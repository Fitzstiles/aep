import "./adminpage.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
const Adminpage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <div className="logo">
          <h1>AEP</h1>
        </div>
      </a>
      <div onClick={() => setToggle(!toggle)} className="mode__toggle">
        {toggle ? (
          <LightModeIcon
            style={{
              fill: "#464ad3",
            }}
          />
        ) : (
          <DarkModeIcon />
        )}
      </div>
    </div>
  );
};

export default Adminpage;
