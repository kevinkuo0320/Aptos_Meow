import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import App from "./app/App";
import Web3Provider from "@fewcha/web3-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3Provider>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  </Web3Provider>
);
