import React from "react";
import PropTypes from "prop-types";

function CardHeading({ text, dark = false }) {
  return (
    <h3
      className={`font-semibold text-h3-card-sm xlX:h3-card-lg ${
        dark && "text-black"
      }`}
    >
      {text}
    </h3>
  );
}

CardHeading.propTypes = {
  text: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
};
export default CardHeading;
