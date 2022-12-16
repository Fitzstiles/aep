import { createContext, useContext, useReducer } from "react";

const stateContext = createContext();

export const StateContextProvider = ({ reducer, children, initialState }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);
