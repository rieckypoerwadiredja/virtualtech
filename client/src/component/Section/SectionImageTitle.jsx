import React, { useContext } from "react";

// Component
import ImageRounded from "../Image/ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";
import MainContext from "../../context/MainContext";

function SectionImageTitle() {
  const { sectionImage, sectionBigText } = useContext(MainContext).imageTitle;

  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10 xlX:mr-16">
      <div className="flex flex-col">
        <ImageRounded img={sectionImage.image} />
        <div className="mt-8">
          <PhotoAuthor
            title={sectionImage.title}
            author={sectionImage.author}
          />
        </div>
      </div>
      <SectionTitleDescWithBigText
        bigText={sectionBigText.bigText}
        title={sectionBigText.title}
        desc={sectionBigText.desc}
      />
    </div>
  );
}

export default SectionImageTitle;
