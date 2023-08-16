import React from "react";
import assasinImg from "../../assets/assasin-image.svg";
import assasinCard from "../../assets/assasin-card.svg";
import banner from "../../assets/ido-banner.svg";
import projectLogo from "../../assets/projectlogo.svg";
import divider from "../../assets/pseudo.svg";
import fund from "../../assets/01.png.svg";
import growth from "../../assets/02.png.svg";
import kyc from "../../assets/03.png.svg";
import staking from "../../assets/04.png.svg";
import Hero from "../../components/Hero/Hero";

function LaunchPads() {
  return (
    <div>
      <Hero />
      <div className="pt-10 px-5 md:px-16">
        <div className="text-center font-bold text-5xl">
          Featured project coming soon{" "}
        </div>
        <div className="flex flex-col justify-center mt-10 md:flex-row items-center ">
          <img className="block w-full md:w-[65%]" src={assasinImg} />
          <img
            className="md:-ml-20 w-4/5 md:w-[35%] -mt-10 md:mt-0"
            src={assasinCard}
          />
        </div>

        {/* live ptojects */}
        <div className="font-bold text-2xl mt-10 pt-5">Live Projects</div>
        <div className="flex flex-col gap-5 justify-start mt-5 md:flex-row">
          <div className="md:1/3 bg-primary font-raj">
            <div className="bg-primary">
              <div className="relative">
                <img className="block w-full" src={banner} />
                <div className="-mt-[70px] bg-primary justify-center flex items-center border-3 border-[#28DBD1] bg-[#02121d] p-7 pb-0">
                  <img
                    className="block w-20 w-[76px] h-[76px]"
                    src={projectLogo}
                  />
                  <div className="bg-[#02121d] p-2 py-1 border-[1px] border-l-0 border-solid border-[#28DBD1] flex-1">
                    DeFianXer 3dX
                  </div>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex justify-between">
                  <div>
                    <div>Round Name</div>
                    <div>Valuation</div>
                    <div>Project Starts</div>
                  </div>
                  <div className="text-secondary">
                    <div>Public</div>
                    <div>25M</div>
                    <div>TBA</div>
                  </div>
                </div>
                <div>
                  <div>Raised Amount</div>
                  <div className="font-bold">
                    <span className="text-secondary">7000</span>/10000
                  </div>
                  <div className="bg-[#02121D] w-full h-2">
                    <div className="w-[70%] bg-secondary h-full"></div>
                  </div>
                </div>
                <button className="bg-btn px-3 py-3 font-bold mt-3 text-white border-0">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* completed projects */}
        <div className="pt-5 font-raj">
          <div className="text-center">Previous</div>
          <div className="text-center font-bold font-[44px]">
            Completed Projects
          </div>
          <img src={divider} className={"block mx-auto w-[205px]"} />
          <div className="text-center">No completed project yet</div>
        </div>

        {/* banefits */}
        <div className="py-20">
          <div className="text-center text-secondary font-raj">Benefits</div>
          <div className="text-center text-white font-raj">What we offer</div>
          <img src={divider} className={"block mx-auto w-[205px]"} />
          <div className="flex flex-col font-raj md:grid md:grid-cols-4 text-center gap-4 mt-5">
            <div className="flex flex-col gap-3 items-center">
              <img src={fund} />
              <div className="font-bold">Easy Liquidity Fundraising</div>
              <div>
                Rocketpad offers seamless liquidity solutions for fundraising
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <img src={growth} />
              <div>Growing Project Community</div>
              <div className="font-[200]">
                Rocketpad understands the significance of a strong and engaged
                community for project success. with community building tools and
                features
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <img src={kyc} />
              <div>Full KYC</div>
              <div>
                Rocketpad prioritizes compliance and security with a
                comprehensive KYC process. Full KYc ensures that all participant
                undergo identity verification, promoting transparency and trust
                with the ecosystem
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <img src={staking} />
              <div>Staking</div>
              <div>
                Rocketpad offers a staking mechanism where users can lock their
                tokens in a secure manner by participating in staking, users
                contribute to the stability and security of the network while
                earning rewards for their participation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchPads;
