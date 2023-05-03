import React, { useContext } from "react";
import PropTypes from "prop-types";
// component
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import HeaderContext from "../../context/HeaderContext";
// hooks
import useImageOnLoad from "../../hooks/useImageOnLoad";
import NavbarPrivider from "../../context/NavbarContext";

function Hero({ navigation = false }) {
  const { img } = useContext(HeaderContext).jsonData;
  const { handleImageOnLoad, imgLoading } = useImageOnLoad();
  return (
    <header className="relative z-10 w-full h-[732px] smXL:h-[110vh] smXL:min-h-[650px] px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-white flex flex-col justify-between items-start overflow-hidden">
      <NavbarPrivider>
        <Navbar />
      </NavbarPrivider>
      {img.src && img.alt && (
        <img
          onLoad={handleImageOnLoad}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 -z-10 w-full h-full object-cover brightness-50`}
        />
      )}
      {imgLoading && (
        <div className="absolute top-0 left-0 -z-[5] w-full h-full before:block before:content-center before:z-10 bg-gray-100 before:opacity-50"></div>
      )}

      <HeroSection navigation={navigation} withImage />
      <div className="relative ml-[56%] smXL:ml-[59%] w-1/2 h-[50px] bg-white"></div>
    </header>
  );
}

Hero.propTypes = {
  navigation: PropTypes.bool,
};

export default Hero;
