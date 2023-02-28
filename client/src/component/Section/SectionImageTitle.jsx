import React from "react";

// Component
import ImageRounded from "../Image/ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";

function SectionImageTitle() {
  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10">
      <div className="flex flex-col">
        <ImageRounded img="./drone-man.jpg" />
        <div className="mt-8">
          <PhotoAuthor title="Start Drone" author="Photo by unsplash.com" />
        </div>
      </div>
      <SectionTitleDescWithBigText />
    </div>
  );
}

export default SectionImageTitle;
