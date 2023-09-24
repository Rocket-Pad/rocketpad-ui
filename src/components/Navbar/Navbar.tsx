import React from "react";
import logo from "../../assets/logo.png";
import { useWalletProvider } from "../../contexts/WalletContext/WalletContext";
import { addressShortner } from "../../utils";
import WalletModal from "../WalletModal";
import { Link } from "react-router-dom";

function Navbar() {
  const wallet = useWalletProvider();
  // console.log(wallet.chainId, wallet.address);
  return (
    <div className="flex font-raj py-5 justify-between items-center">
      <img src={logo} />
      <div className="flex gap-10 hidden md:flex font-bold text-[16px] text-[#fff]/50">
        <Link to="/" className="text-[#28DBD1]">
          Launchpad
        </Link>
        <Link to="/" className="text-[#fff]/50">
          Staking
        </Link>
        <Link to="/" className="text-[#fff]/50">
          Farming
        </Link>
        <Link to="/" className="text-[#fff]/50">
          About
        </Link>
      </div>
      {wallet?.address ? (
        <div className="bg-secondary text-black font-bold px-6 cursor-pointer flex items-center py-2 rounded-full">
          {addressShortner(wallet.address)}
        </div>
      ) : (
        <button
          onClick={() => wallet.setModalOpen(true)}
          className="bg-[#28DBD1] text-black font-bold text-lg px-5 py-3 rounded border-none"
        >
          Connect{" "}
        </button>
      )}
      <WalletModal
        isOpen={wallet.modalOpen}
        onClose={() => {
          wallet.setModalOpen(false);
        }}
      />
    </div>
  );
}

export default Navbar;
