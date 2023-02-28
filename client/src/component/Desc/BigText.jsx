import React from "react";
import PropTypes from "prop-types";

function BigText({ text }) {
  return (
    <p className="text-big-text-sm font-semibold smXL:text-big-text-md">
      {text}
    </p>
  );
}

BigText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BigText;
