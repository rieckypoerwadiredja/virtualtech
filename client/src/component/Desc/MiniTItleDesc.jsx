import React from "react";
import PropTypes from "prop-types";
// Component
import Paragraph from "./Paragraph";

function MiniTitleDesc({ title, desc }) {
  return (
    <>
      <Paragraph text={title} bold />
      <div className="text-whiteFont-400">
        <Paragraph text={desc} medium />
      </div>
    </>
  );
}

MiniTitleDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MiniTitleDesc;
