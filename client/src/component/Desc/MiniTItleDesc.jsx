import React from "react";
import PropTypes from "prop-types";
// Component
import Paragraph from "./Paragraph";

function MiniTitleDesc({ title, desc, dark = false }) {
  return (
    <>
      <Paragraph text={title} bold dark />
      <div
        className={`-mt-1 ${
          dark ? "text-blackFont-400" : "text-whiteFont-400"
        }`}
      >
        <Paragraph text={desc} medium dark />
      </div>
    </>
  );
}

MiniTitleDesc.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MiniTitleDesc;
