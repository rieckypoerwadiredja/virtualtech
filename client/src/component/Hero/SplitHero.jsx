import React from "react";
import PropTypes from "prop-types";
// Component
import HeroTitleDesc from "./HeroTitleDesc";
import SectionTitleHeadingTwo from "../Heading/SectionTitleHeadingTwo";
import ImageRounded from "../Image/ImageRounded";
// Context
import HeaderContext from "../../context/HeaderContext";
import { useContext } from "react";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import useImageOnLoad from "../../hooks/useImageOnLoad";
import CircleButton from "../Button/CircleButton";

const LeftSide = () => {
  const { img, circleButton } = useContext(HeaderContext);
  const { handleImageOnLoad, imgLoading } = useImageOnLoad();
  return (
    <div
      className={`relative w-full h-full flex flex-col mdXL:grow py-28 px-web-sm mdXL:w-1/2 smXL:px-web-md mdXL:pr-32 xlX:pl-20`}
    >
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
      <HeroTitleDesc withImage />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 -translate-y-1 mdXL:bottom-1/2 mdXL:translate-y-1/2 mdXL:left-full z-1">
        <CircleButton
          text={circleButton.text}
          redirectTo={circleButton.redirectTo}
          withImage
          animation
        />
      </div>
    </div>
  );
};

const RightSide = () => {
  const { secondHeading, secondImg, titleDesc } = useContext(HeaderContext);
  return (
    <div
      className={`bg-custome-green-200 text-black h-full w-full flex flex-col grow gap-y-8 mdXL:w-1/2 py-28 px-web-sm smXL:px-web-md mdXL:pl-32 xlX:pr-web-lg`}
    >
      <SectionTitleHeadingTwo textParser={secondHeading} />
      <ImageRounded animation noOver overlap img={secondImg} />
      <div>
        <MiniTitleDesc desc={titleDesc.desc} title={titleDesc.title} />
      </div>
    </div>
  );
};
const SplitHero = () => {
  return (
    <header className="relative box-border mdXL:h-[110vh] w-full text-white flex flex-col mdXL:flex-row justify-between items-start overflow-hidden">
      <LeftSide />
      <RightSide />
    </header>
  );
};

SplitHero.propTypes = {};

export default SplitHero;
