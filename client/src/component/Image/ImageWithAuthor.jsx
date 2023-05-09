import React from "react";
import PropTypes from "prop-types";
// Component
import ImageRounded from "./ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";

function ImageWithAuthor({ img, title, author, reverse = false }) {
  return (
    <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"}`}>
      <ImageRounded img={img} />
      <div className={`${reverse ? "mb-5" : "mt-8"}`}>
        <PhotoAuthor title={title} author={author} />
      </div>
    </div>
  );
}

ImageWithAuthor.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default ImageWithAuthor;
