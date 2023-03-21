import React from "react";
import PropTypes from "prop-types";

function ImageCircle({ src, alt }) {
  return (
    <img
      className="w-20 aspect-square rounded-full group-hover:scale-[115%] duration-300"
      src={src}
      alt={alt}
    />
  );
}

ImageCircle.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default ImageCircle;
