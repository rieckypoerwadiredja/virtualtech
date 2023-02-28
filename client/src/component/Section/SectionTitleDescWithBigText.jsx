import React from "react";
// Component
import BigText from "../Desc/BigText";
import TitleSection from "../Desc/TitleSection";
import Paragraph from "../Desc/Paragraph";

function SectionTitleDescWithBigText() {
  return (
    <div className="py-section-sm pt-14">
      <BigText text="1400+" />
      <div className="mt-4 mb-12">
        <TitleSection text="Minutes spent controlling devices drone the air." />
      </div>
      <Paragraph text="So many people have already trusted us. This number is constantly growing thanks to the positive feedback from our customers." />
    </div>
  );
}

export default SectionTitleDescWithBigText;
