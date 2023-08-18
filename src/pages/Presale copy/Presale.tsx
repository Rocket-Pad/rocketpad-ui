import React from "react";
import presaleBanner from "../../assets/projectBanner.png";
import Navbar from "../../components/Navbar/Navbar";

function Presale() {
  return (
    <div className="px-20 md:px-16">
      <Navbar />
      <div className="pt-20">
        <div className="flex">
          <div className="flex-1 gap-10 font-raj">
            <div className="mb-10 text-6xl">
              Origin labs:
              <br /> DeFianXer 3dX
            </div>
            <div className="w-4/5">
              Origin labs is the first revenue sharing DDEFI platfrom. Origin is
              building a light weight and userfriendly cross-chauiin platfrom.
              holders eaarn a percent of origins revenue each month.
            </div>
            <div className="mt-5 w-4/5">
              <div className="bg-primary px-4 py-2">
                <div className="flex justify-between mb-5">
                  <div>Whitelist</div>
                  <div className="text-secondary"> Ongoing</div>
                </div>
                <div>Whitelist 5,000 ~ Max 1 Token ~ Price: 2 ETH</div>
              </div>
              <div className="bg-primary mt-3 px-4 py-2">
                <div className="flex justify-between mb-5">
                  <div>Price sale</div>
                  <div className="text-secondary"> Ongoing</div>
                </div>
                <div>Max 2 Token ~ Price: 2 ETH</div>
              </div>
            </div>
            <div className="mt-4 flex font-raj gap-3 w-4/5">
              <button className="text-primary font-raj border-0 bg-secondary text-lg py-2 px-6">
                Claim token
              </button>
              <div className="flex-1 bg-primary p-3">
                <div className="bg-[#02121D] w-full h-2">
                  <div className="w-[70%] bg-secondary h-full"></div>
                </div>
                <div className="flex justify-between">
                  <div>Total Raised</div>
                  <div>
                    <span className="text-secondary">7000</span>/ 1000 TENET
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <img className="block w-full" src={presaleBanner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
