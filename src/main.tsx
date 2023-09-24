import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AccountProvider } from "./contexts/WalletContext/WalletContext";
import { type Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { metamask, metamaskHooks } from "./connectors";
import { MetaMask } from "@web3-react/metamask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const Connectors: [MetaMask, Web3ReactHooks][] = [[metamask, metamaskHooks]];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider connectors={Connectors}>
        <AccountProvider>
          <App />
          <ToastContainer />
        </AccountProvider>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
