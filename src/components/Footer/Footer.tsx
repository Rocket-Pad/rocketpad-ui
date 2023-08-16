import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import "./footer.css";
function Footer() {
  return (
    <div className="relative h-[360px] flex flex-col items-center justify-center footer">
      <div className="flex flex-col items-end justify-end h-1/2">
        <div className="flex items-center justify-center">
          <a
            href="/"
            className=" p-2 border-[1px] m-0 flex items-center border-solid rounded border-secondary text-white"
          >
            <BiLogoTwitter className="text-[18px]" />
          </a>
        </div>
      </div>
      <div className="flex py-5 flex-col items-end justify-end h-1/2">
        Rocketpad © 2023 | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
