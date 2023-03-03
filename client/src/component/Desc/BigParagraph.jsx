import React from "react";
import PropTypes from "prop-types";

function BigParagraph({ text, bold = false, medium = false }) {
  if (bold) {
    return <p className="font-semibold text-2xl tracking-wide">{text}</p>;
  }
  if (medium) {
    return <p className="font-medium text-2xl tracking-wide">{text}</p>;
  }
  return <p className="text-2xl tracking-wide">{text}</p>;
}

BigParagraph.protoTypes = {
  text: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
};

export default BigParagraph;
