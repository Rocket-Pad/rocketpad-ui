import { Dialog } from "@headlessui/react";
import { LiaTimesSolid } from "react-icons/lia";
import metamask from "../../assets/metamask.png";
import injected from "../../assets/arrow-right.svg";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useWalletProvider } from "../../contexts/WalletContext/WalletContext";

function WalletModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { isConnecting, connect } = useWalletProvider();
  console.log(onClose);
  return (
    <Dialog open={isOpen} onClose={() => onClose()}>
      <div className="fixed inset-0 bg-black/90" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={"bg-[#02121d] rounded-lg p-5 w-[90%] md:w-1/3"}
        >
          <LiaTimesSolid onClick={onClose} className="ml-auto block" />
          <div className="mt-5">
            <div className="mb-3 font-bold">Connect Wallet</div>
            <div
              onClick={connect}
              className="bg-primary items-center flex p-3 gap-3 rounded-lg cursor-pointer"
            >
              <img
                src={window?.ethereum.isMetaMask ? metamask : injected}
                className="w-[40px] h-[40px]"
              />
              <div>
                <div className="font-bold">
                  {window?.ethereum.isMetaMask ? "Metamask" : "Injected"}
                </div>
                <div className="font-sm text-sm">Connect</div>
              </div>
              {isConnecting && (
                <TailSpin
                  wrapperClass="ml-auto"
                  color="#fff"
                  height={"20px"}
                  width={"20px"}
                />
              )}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default WalletModal;
