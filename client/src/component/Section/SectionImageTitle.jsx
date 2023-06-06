import React, { useContext } from "react";

// Component
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";
import MainContext from "../../context/MainContext";
import ImageWithAuthor from "../Image/ImageWithAuthor";
import LeftSection from "./SplitSection/LeftSection";

function SectionImageTitle() {
  const { sectionImage, sectionBigText } = useContext(MainContext).imageTitle;

  return (
    <LeftSection>
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
    </LeftSection>
  );
}

export default SectionImageTitle;
