import React, { useContext } from "react";

// Component
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";
import MainContext from "../../context/MainContext";
import ImageWithAuthor from "../Image/ImageWithAuthor";

function SectionImageTitle() {
  const { sectionImage, sectionBigText } = useContext(MainContext).imageTitle;

  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10 xlX:mr-16">
      <ImageWithAuthor
        author={sectionImage.author}
        title={sectionImage.title}
        img={sectionImage.image}
      />
      <SectionTitleDescWithBigText
        bigText={sectionBigText.bigText}
        title={sectionBigText.title}
        desc={sectionBigText.desc}
      />
    </div>
  );
}

export default SectionImageTitle;
