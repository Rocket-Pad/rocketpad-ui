import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";

const WEB3STORAGE_API_KEY = import.meta.env.VITE_APP_API_KEY;
if (!WEB3STORAGE_API_KEY) {
  console.log("provide key for web3 storage");
}

export const web3StorageClient = new Web3Storage({
  token: WEB3STORAGE_API_KEY,
  endpoint: new URL("https://api.web3.storage"),
});

export const storeJSON = async (json: any) => {
  try {
    const ext = "json";
    const fileName = json.address;
    const file = JSON.stringify(json);
    const newFile = new File([file], fileName, { type: ext });
    const cid = await web3StorageClient.put([newFile], {
      name: fileName,
    });
    const metadataURI = `https://${cid}.ipfs.dweb.link/${encodeURIComponent(
      fileName
    )}`;
    return metadataURI;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const uploadFile = async (file: File) => {
  try {
    const ext = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${ext}`;
    const newFile = new File([file], fileName, { type: file.type });
    const cid = await web3StorageClient.put([newFile], {
      name: fileName,
    });
    const URI = `https://${cid}.ipfs.dweb.link/${fileName}`;
    return URI;
  } catch (error) {
    throw error;
  }
};
