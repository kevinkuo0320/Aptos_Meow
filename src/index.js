import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import App from "./app/App";
import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
} from '@manahippo/aptos-wallet-adapter';
//import Web3Provider from "@fewcha/web3-react";

const wallets = [
  new HippoWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new FewchaWalletAdapter(),
  new HippoExtensionWalletAdapter(),
  new PontemWalletAdapter(),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
window.addEventListener('load', () => {
  root.render(
    <WalletProvider
      wallets={wallets}
      autoConnect={true} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log('Handle Error Message', error);
      }}>
      <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
    </WalletProvider>
    
  );
})

