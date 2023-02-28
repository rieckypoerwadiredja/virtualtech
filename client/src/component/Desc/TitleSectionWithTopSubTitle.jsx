import React from "react";
import PropTypes from "prop-types";

// Component
import Paragraph from "./Paragraph";
import SectionTitleHeadingThree from "../Heading/SectionTitleHeadingThree";

function TitleSectionWithTopSubTitle({ title, subTitle }) {
  return (
    <>
      <Paragraph text={subTitle} medium />
      <div className="mt-2">
        <SectionTitleHeadingThree text={title} />
      </div>
    </>
  );
}

TitleSectionWithTopSubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default TitleSectionWithTopSubTitle;
