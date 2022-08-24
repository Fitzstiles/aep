import "./adminpage.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion } from "framer-motion";
import { useState } from "react";
const Adminpage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <a href="/">
        <motion.div
          initial={{ translateX: -60 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1 }}
          className="logo"
        >
          <h1>AEP</h1>
        </motion.div>
      </a>
      <motion.div
        initial={{ translateX: 60 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1 }}
        onClick={() => setToggle(!toggle)}
        className="mode__toggle"
      >
        {toggle ? (
          <LightModeIcon
            style={{
              fill: "#464ad3",
            }}
          />
        ) : (
          <DarkModeIcon />
        )}
      </motion.div>
    </div>
  );
};

export default Adminpage;
