import React from "react";
// component
import SectionTitleDesc from "./SectionTitleDesc";
import SectionButton from "../Button/SectionButton";
import ImageRounded from "../Image/ImageRounded";
import jsonData from "../../data/data.json";

function SectionDescription() {
  const data = jsonData.section.description;

  return (
    <div className="py-section-sm overflow-x-visible text-blackFont-800 mdXL:w-1/2 mdXL:mt-[70px] lg:mt-40 mdXL:ml-10 xlX:ml-16 flex flex-col justify-between">
      <div>
        <SectionTitleDesc data={data} />
      </div>

      <div className="text-blackFont-800 mt-10 mb-8 lg:mb-16 w-full">
        <SectionButton texts={data.button} />
      </div>

      <div className="relative overflow-x-visible w-[calc(100%+(1.75rem*2))] smXL:w-[calc(100%+((1.75rem+1.25rem)*2))] -ml-section-sm smXL:-ml-[calc(1.75rem+1.25rem)]">
        <ImageRounded img={data.image} overlap />
      </div>
    </div>
  );
}

export default SectionDescription;
