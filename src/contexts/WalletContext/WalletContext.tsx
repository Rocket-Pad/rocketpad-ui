import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { metamask } from "../../connectors";
import { useWeb3React } from "@web3-react/core";

const accountContext = createContext<Record<any, any>>({});
export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState("");
  const [ChainId, setChainId] = useState("");
  const [isConnecting, setConnecting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { chainId, connector } = useWeb3React();

  const connect = async () => {
    if (window?.ethereum) {
      setConnecting(true);
      try {
        await metamask.activate();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (chainId !== 155) {
          try {
            await connector.activate(155);
          } catch {
            console.log("catching");

            const addChainParameter = {
              chainId: 155,
              chainName: "Tenet Testnet",
              rpcUrls: ["https://rpc.testnet.tenet.org"],
              nativeCurrency: { name: "Tenet", decimals: 18, symbol: "TENET" },
              blockExplorerUrls: ["https://testnet.tenetscan.io/"],
            };
            await connector.activate(addChainParameter);
          }
        }
        setAddress(accounts[0]);
        setChainId(window.ethereum.chainId);
      } catch (err) {
        console.log(err);
      } finally {
        setConnecting(false);
        setModalOpen(false);
      }
    }
  };

  const values = useMemo(
    () => ({
      address,
      chainId,
      connect,
      isConnecting,
      modalOpen,
      setModalOpen,
    }),
    [address, chainId, connect, isConnecting, modalOpen, setModalOpen]
  );
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: any) => {
        // Handle changes in accounts
        setAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId: any) => {
        // Handle changes in the network (chain)
        setChainId(chainId);
      });
      return () => {
        window.ethereum.removeAllListeners("accountsChanged");
        window.ethereum.removeAllListeners("chainChanged");
      };
    }
  }, []);
  return (
    <accountContext.Provider value={values}>{children}</accountContext.Provider>
  );
};

export const useWalletProvider = () => useContext(accountContext);
