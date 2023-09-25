export const defaultChainId = 155;
const LIVE = import.meta.env.VITE_APP_LIVE === "true";

export const factoryAddresses = {
  155: "0x4f508c490E805cfd07342041F8A407f204Efc10c",
};

export const API_ENDPOINT = LIVE
  ? "https://api-b71l.onrender.com/"
  : "http://localhost:8000/";
