import React from "react";
import PropTypes from "prop-types";

function PageTitle({ text, highlighter, withImage = false }) {
  if (highlighter) {
    return (
      <h1 className="text-title-xs smX:text-title-sm text font-normal smXL:text-title-md xlX:text-title-lg">
        {text}
        <br />
        <span
          className={`highlighter relative mt-1 py-2 inline-block ${
            withImage ? "bg-white/20" : "bg-custome-green-300"
          } pr-[40px] xlX:text-title-lg`}
        >
          {" "}
          {highlighter}
        </span>
      </h1>
    );
  }
  return (
    <h1 className="text-title-xs sm:title-sm text font-normal smXL:text-title-md xl:text-title-lg">
      {text}
    </h1>
  );
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
  highlighter: PropTypes.string,
};

export default PageTitle;
