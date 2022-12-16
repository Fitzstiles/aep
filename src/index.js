import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./comoponents/globalStore/StateContext";
import reducer, { initialState } from "./comoponents/globalStore/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
