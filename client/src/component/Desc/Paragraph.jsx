import React from "react";
import PropTypes from "prop-types";

function Paragraph({ text, bold = false, medium = false }) {
  if (bold) {
    return <p className="font-semibold text-lg tracking-wide">{text}</p>;
  }
  if (medium) {
    return <p className="font-medium text-lg tracking-wide">{text}</p>;
  }
  return <p className="text-lg tracking-wide">{text}</p>;
}

Paragraph.protoTypes = {
  text: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Paragraph;
