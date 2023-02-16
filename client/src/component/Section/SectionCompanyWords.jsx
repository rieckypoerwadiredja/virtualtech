import React from "react";
// Component
import SectionTitleHeadingTwo from "../Heading/SectionTitleHeadingTwo";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import Quote from "../Desc/Quote";

function SectionCompanyWords() {
  return (
    <div className="py-section-sm pt-14 min-h-fit mdXL:flex">
      <div className="w-full py-7 mdXL:w-1/2">
        <SectionTitleHeadingTwo textParser="Technology <br/> drones" />
        <div className="mt-7">
          <MiniTitleDesc
            title="Working with technology"
            desc="We created photography from drones."
            dark
          />
        </div>
      </div>
      <div className="mdXL:w-1/2 mdXL:pl-12 xlX:pl-16">
        <Quote />
      </div>
    </div>
  );
}

export default SectionCompanyWords;
