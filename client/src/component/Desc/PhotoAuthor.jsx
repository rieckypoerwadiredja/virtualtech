import React from "react";
import PropTypes from "prop-types";

function PhotoAuthor({ title, author }) {
  return (
    <p className="text-sm uppercase font-semibold text-blackFont-800 tracking-[0.3em]">
      {title} -{" "}
      <span className="text-sm font-light normal-case text-blackScreen-400 tracking-[0.3em]">
        {author}
      </span>
    </p>
  );
}

PhotoAuthor.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default PhotoAuthor;
