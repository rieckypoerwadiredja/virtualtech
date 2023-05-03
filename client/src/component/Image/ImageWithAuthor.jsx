import React from "react";
import PropTypes from "prop-types";
// Component
import ImageRounded from "./ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";

function ImageWithAuthor({ img, title, author }) {
  return (
    <div className="flex flex-col">
      <ImageRounded img={img} />
      <div className="mt-8">
        <PhotoAuthor title={title} author={author} />
      </div>
    </div>
  );
}

ImageWithAuthor.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ImageWithAuthor;
