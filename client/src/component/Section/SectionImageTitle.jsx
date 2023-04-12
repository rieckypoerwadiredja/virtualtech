import React from "react";

// Component
import ImageRounded from "../Image/ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";

import jsonData from "../../data/data.json";

function SectionImageTitle({ data }) {
  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10 xlX:mr-16">
      <div className="flex flex-col">
        <ImageRounded img={data.sectionImage.image} />
        <div className="mt-8">
          <PhotoAuthor
            title={data.sectionImage.title}
            author={data.sectionImage.author}
          />
        </div>
      </div>
      <SectionTitleDescWithBigText
        bigText={data.sectionBigText.bigText}
        title={data.sectionBigText.title}
        desc={data.sectionBigText.desc}
      />
    </div>
  );
}

export default SectionImageTitle;
