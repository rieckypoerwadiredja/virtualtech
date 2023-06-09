import React, { useContext } from "react";
// component
import SectionTitleDesc from "./SectionTitleDesc";
import SectionButton from "../Button/SectionButton";
import ImageRounded from "../Image/ImageRounded";
import RightSection from "./SplitSection/RightSection";

// Context
import MainContext from "../../context/MainContext";

function SectionDescription() {
  const { button, image, title, desc } = useContext(MainContext).description;
  return (
    <RightSection padTop>
      <div>
        <SectionTitleDesc
          title={title.title}
          subTitle={title.subTitle}
          desc={desc}
        />
      </div>

      <div className="text-blackFont-800 w-full">
        <SectionButton texts={button} />
      </div>

      <div className="relative overflow-x-visible w-[calc(100%+(1.75rem*2))] smXL:w-[calc(100%+((1.75rem+1.25rem)*2))] -ml-section-sm smXL:-ml-[calc(1.75rem+1.25rem)]">
        <ImageRounded img={image} overlap animation />
      </div>
    </RightSection>
  );
}

export default SectionDescription;
