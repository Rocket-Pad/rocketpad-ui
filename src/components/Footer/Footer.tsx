import React from "react";
import { BiLogoDiscordAlt, BiLogoTwitch, BiLogoTwitter } from "react-icons/bi";
import "./footer.css";
function Footer() {
  return (
    <div className="relative h-[360px] flex flex-col footer">
      <div className="flex justify-evenly h-1/2 mb-7.5">
        <div className="flex items-center justify-center">
          <a
            href="/"
            className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
          >
            <BiLogoTwitter className="text-[24px]" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/"
            className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
          >
            <BiLogoDiscordAlt className="text-[24px]" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/"
            className="bg-tertiary p-[13.5px] border-[1px] m-0 flex items-center border-solid rounded border-secondary/40 text-white"
          >
            <BiLogoTwitch className="text-[24px]" />
          </a>
        </div>
      </div>
      <div className="flex py-5 flex-col items-end justify-end items-center h-1/2">
        Rocketpad © 2023 | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
