export const defaultChainId = 155;
const LIVE = import.meta.env.VITE_APP_LIVE === "true";

export const factoryAddresses = {
  155: "0xF58cc30ad21c3Bdbc094922d2C839Cc2283E0160",
};

export const API_ENDPOINT = LIVE
  ? "https://api-b71l.onrender.com/"
  : "http://localhost:8000/";
