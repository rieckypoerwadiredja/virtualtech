import React, { useContext } from "react";
// component
import SectionTitleDesc from "./SectionTitleDesc";
import SectionButton from "../Button/SectionButton";
import ImageRounded from "../Image/ImageRounded";

// Context
import MainContext from "../../context/MainContext";

function SectionDescription() {
  const { button, image, title, desc } = useContext(MainContext).description;
  return (
    <div className="py-section-sm overflow-x-visible text-blackFont-800 mdXL:w-1/2 mdXL:mt-[70px] lg:mt-40 mdXL:ml-10 xlX:ml-16 flex flex-col justify-between">
      <div>
        <SectionTitleDesc
          title={title.title}
          subTitle={title.subTitle}
          desc={desc}
        />
      </div>

      <div className="text-blackFont-800 mt-10 mb-8 lg:mb-16 w-full">
        <SectionButton texts={button} />
      </div>

      <div className="relative overflow-x-visible w-[calc(100%+(1.75rem*2))] smXL:w-[calc(100%+((1.75rem+1.25rem)*2))] -ml-section-sm smXL:-ml-[calc(1.75rem+1.25rem)]">
        <ImageRounded img={image} overlap />
      </div>
    </div>
  );
}

export default SectionDescription;
