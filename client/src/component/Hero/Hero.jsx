import React from "react";
import PropTypes from "prop-types";
// component
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";

function Hero({ data, navigation = false }) {
  return (
    <header className="relative z-10 w-full h-[732px] smXL:h-[110vh] smXL:min-h-[650px] px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-white flex flex-col justify-between items-start overflow-hidden">
      <Navbar />
      {data.img.src && data.img.alt && (
        <img
          src={data.img.src}
          alt={data.img.alt}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50"
        />
      )}

      <HeroSection data={data} navigation={navigation} />
      <div className="relative ml-[56%] smXL:ml-[59%] w-1/2 h-[50px] bg-white"></div>
    </header>
  );
}

Hero.propTypes = {
  navigation: PropTypes.bool,
};

export default Hero;
