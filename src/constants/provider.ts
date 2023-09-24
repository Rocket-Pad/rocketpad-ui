import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";

export const staticProvider = new StaticJsonRpcProvider(
  "https://rpc.testnet.tenet.org"
);
