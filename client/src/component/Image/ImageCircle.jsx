import React from "react";
import PropTypes from "prop-types";
// hooks
import useImageOnLoad from "../../hooks/useImageOnLoad";

function ImageCircle({ src, alt }) {
  const { handleImageOnLoad, style } = useImageOnLoad();
  return (
    <img
      onLoad={handleImageOnLoad}
      className={`w-20 aspect-square rounded-full group-hover:scale-[115%] duration-300 ${style}`}
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
