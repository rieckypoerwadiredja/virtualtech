import React from "react";
import PropTypes from "prop-types";

// Component
import ExcessButoon from "../Button/ExcessButoon";

function SectionButton({ texts }) {
  return (
    <>
      {texts.map((text) => (
        <ExcessButoon
          key={text.id}
          text={text.text}
          redirectTo={text.redirectTo}
          bigText
        />
      ))}
    </>
  );
}

SectionButton.propTypes = {
  texts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
};

export default SectionButton;
