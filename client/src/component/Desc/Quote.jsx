import React from "react";
import PropTypes from "prop-types";

function Quote({ text }) {
  return (
    <p className="text-quote-sm smXL:text-quote-md font-medium xlX:text-quote-lg">
      {text}
    </p>
  );
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quote;
