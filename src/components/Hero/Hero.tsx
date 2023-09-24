import React from "react";
import Navbar from "../Navbar/Navbar";
import rocket from "../../assets/rocket.png";
import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative px-5 md:px-16 hero min-h-[500px]"
      //   style={{ backgroundImage: "../../assets/bg1.svg" }}
    >
      {/* <img src={bg} className="absolute z-0 w-full h-[500px]" /> */}
      <Navbar />
      <div className="font-raj py-20 flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-3/5">
          <div className="text-5xl md:text-6xl font-bold md:w-4/5">
            WE LAUNCH ALL COINS
          </div>
          <p className="md:w-4/5 md:text-lg font-semibold md:font-bold">
            Bring your brand to the Metaverse and grow your community, or
            discover new collectibles while preserving the protective Web2
            consumer Rights experience
          </p>
          <div className="hidden md:flex  md:w-4/5 gap-3">
            <Link
              to="/create"
              className="bg-[#28DBD1] py-4 border-none text-lg font-bold block px-10"
            >
              Submit Project
            </Link>
            <button className="bg-[#24252E] text-white py-4.5 block text-lg font-bold border-none px-10">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="overflow-hidden max-h-[400px]">
            <img className="block w-4/5" src={rocket} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
