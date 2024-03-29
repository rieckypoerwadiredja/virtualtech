import React, { useContext, useLayoutEffect, useRef } from "react";

// Component
import Paragraph from "../Desc/Paragraph";
import CircleButton from "../Button/CircleButton";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
// Context
import HeaderContext from "../../context/HeaderContext";
import HeroTitleDesc from "./HeroTitleDesc";

function HeroSection({ withImage = false }) {
  const { circleButton, titleDesc } = useContext(HeaderContext);

  const rightSection = useRef(null);

  useLayoutEffect(() => {
    if (rightSection.current !== null) {
      const classList = rightSection.current.classList;
      if (rightSection.current.children.length > 1) {
        classList.add("justify-end");
      } else {
        classList.add("justify-start");
      }
    }
  }, [rightSection]);

  return (
    <div className="w-full h-[60%] smXL:h-fit flex flex-col mdXL:flex-row mdXL:justify-between max-w-[1532px] mx-auto">
      {/* <div className="w-full min-h-fit sm:w-[50%]">
        <Paragraph text="01" bold />
        <PageTitle
          withImage={withImage}
          highlighter={heading.highlighter}
          text={heading.heading}
        />
        <div
          className={`my-[40px] ${
            withImage ? "text-whiteFont-400" : "text-trans-white-500"
          } `}
        >
          <Paragraph text={desc} />
        </div>
        {mainButton && (
          <MainButton
            text={mainButton.text}
            redirectTo={mainButton.redirectTo}
          />
        )}
      </div> */}
      <div className="w-full min-h-fit sm:w-[50%]">
        <HeroTitleDesc withImage={withImage} />
      </div>

      <div
        ref={rightSection}
        className={`hidden mdXL:flex flex-col w-[30%] items-end`}
      >
        <div className="w-full flex justify-end items-start pb-10">
          <CircleButton
            withImage={withImage}
            text={circleButton.text}
            redirectTo={circleButton.redirectTo}
          />
        </div>
        {titleDesc && (
          <div className="w-full flex flex-col">
            <Paragraph text="02" bold />
            <span className="w-full h-[2px] bg-trans-white-400 my-2"></span>
            <MiniTitleDesc title={titleDesc.title} desc={titleDesc.desc} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
