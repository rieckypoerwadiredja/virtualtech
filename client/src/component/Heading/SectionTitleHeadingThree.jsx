import React from "react";
import PropTypes from "prop-types";

function SectionTitleHeadingThree({ text }) {
  return <h2 className="font-bold text-h3-sm xlX::text-h3-md">{text}</h2>;
}

SectionTitleHeadingThree.propTypes = {
  text: PropTypes.string,
};

export default SectionTitleHeadingThree;
