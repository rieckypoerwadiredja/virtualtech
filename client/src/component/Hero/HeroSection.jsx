import React from "react";
import PropTypes from "prop-types";

// Component
import Paragraph from "../Desc/Paragraph";
import PageTitle from "../Heading/PageTitle";
import MainButton from "../Button/MainButton";
import CircleButton from "../Button/CircleButton";
import MiniTitleDesc from "../Desc/MiniTItleDesc";

function HeroSection({ data }) {
  return (
    <div className="w-full h-[60%] smXL:h-fit flex flex-col mdXL:flex-row mdXL:justify-between max-w-[1532px] mx-auto">
      <div className="w-full sm:w-[60%] text-white">
        <Paragraph text="01" bold />
        <PageTitle
          highlighter={data.heading.highlighter}
          text={data.heading.heading}
        />
        <div className="my-[40px] text-whiteFont-400">
          <Paragraph text={data.desc} />
        </div>
        <MainButton
          text={data.mainButton.text}
          redirectTo={data.mainButton.redirectTo}
        />
      </div>

      <div className="hidden mdXL:flex flex-col w-[30%] justify-end items-end">
        <div className="w-full flex justify-end items-start pb-10">
          <CircleButton
            text={data.circleButton.text}
            redirectTo={data.circleButton.redirectTo}
          />
        </div>
        <div className="w-full flex flex-col">
          <Paragraph text="02" bold />
          <span className="w-full h-[2px] bg-trans-white-400 my-2"></span>
          <MiniTitleDesc
            title={data.titleDesc.title}
            desc={data.titleDesc.desc}
          />
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  animation: PropTypes.bool,
};

export default HeroSection;
