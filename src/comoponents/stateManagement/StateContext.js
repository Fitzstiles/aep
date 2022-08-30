import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("");
  const [toggle, settoggle] = useState(false);
  const handleClick = () => {
    settoggle((toggle) => !toggle);
  };
  let stateCheck = toggle ? "show " : "";
  let statechecked = toggle ? "hide" : "";
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <stateContext.Provider
      value={{
        signup,
        user,
        login,
        theme,
        toggleTheme,
        stateCheck,
        handleClick,
        statechecked,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);
