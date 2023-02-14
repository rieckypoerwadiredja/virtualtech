import React from "react";
// component
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";

function Hero() {
  return (
    <header className="relative w-full h-[732px] smXL:h-[110vh] smXL:min-h-[650px] px-web-sm smXL:px-web-md pt-5 text-white flex flex-col justify-between items-start overflow-hidden">
      <Navbar />
      <img
        src="./drone.jpg"
        alt="drone"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50"
      ></img>
      <HeroSection />
      <div className="relative ml-[56%] smXL:ml-[59%] w-1/2 h-[50px] bg-white"></div>
    </header>
  );
}

export default Hero;
