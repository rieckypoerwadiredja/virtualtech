import React from "react";
import PropTypes from "prop-types";

function TitleSection({ text }) {
  return <p className="font-semibold text-h2-sm smXL:text-h2-md">{text}</p>;
}

TitleSection.propTypes = {
  text: PropTypes.string,
};

export default TitleSection;
