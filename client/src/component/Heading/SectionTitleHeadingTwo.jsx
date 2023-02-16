import React from "react";
import PropTypes from "prop-types";

function SectionTitleHeadingTwo({ text, textParser }) {
  if (textParser) {
    return (
      <h2
        className="font-bold text-h2-sm smXL:text-h2-md xlX:text-h2-lg"
        dangerouslySetInnerHTML={{ __html: textParser }}
      />
    );
  }
  return <h2 className="font-bold text-h2-sm smXL:text-h2-md">{text}</h2>;
}

SectionTitleHeadingTwo.propTypes = {
  text: PropTypes.string,
  textParser: PropTypes.string,
};

export default SectionTitleHeadingTwo;
