import React from "react";
import PropTypes from "prop-types";
import Paragraph from "../Desc/Paragraph";
import ArrowLink from "../Navigation/ArrowLink";

function IntermedietesSection({ btnText, redirectTo, text }) {
  return (
    <div className="w-full flex items-center justify-between p-5 mt-5 mb-9 shadow-sm border-b-[2px] border-gray-50">
      <ArrowLink text={btnText} redirectTo={redirectTo} bold dark />
      <div className="hidden smXL:flex">
        <Paragraph text={text} bold />
      </div>
    </div>
  );
}

IntermedietesSection.propTypes = {
  btnText: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IntermedietesSection;
