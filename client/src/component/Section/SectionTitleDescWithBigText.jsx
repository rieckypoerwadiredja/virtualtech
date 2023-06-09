import React from "react";
import PropTypes from "prop-types";

// Component
import BigText from "../Desc/BigText";
import TitleSection from "../Desc/TitleSection";
import Paragraph from "../Desc/Paragraph";

function SectionTitleDescWithBigText({ bigText, title, desc }) {
  return (
    <div className="py-section-sm">
      <BigText text={bigText} />
      <div className="mt-4 mb-12">
        <TitleSection text={title} />
      </div>
      <Paragraph text={desc} />
    </div>
  );
}

SectionTitleDescWithBigText.propTypes = {
  bigText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SectionTitleDescWithBigText;
