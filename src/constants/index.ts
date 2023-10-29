export const defaultChainId = 155;
const LIVE = import.meta.env.VITE_APP_LIVE === "true";

export const factoryAddresses = {
  155: "0x86Dd6f0eeA9b65b8610ff1F0c59290746B80798E",
};

export const API_ENDPOINT = LIVE
  ? "https://api-b71l.onrender.com/"
  : "http://localhost:8000/";
