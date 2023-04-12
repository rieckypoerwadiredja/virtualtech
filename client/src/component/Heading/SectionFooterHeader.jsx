import React from "react";
import PropTypes from "prop-types";

function SectionFooterHeader({ text }) {
  return (
    <h2 className="text-footer-sm mdXL:text-footer-md xlX:text-footer-xl">
      {text}
    </h2>
  );
}

SectionFooterHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionFooterHeader;
