import React from "react";
import PropTypes from "prop-types";
// hooks
import useImageOnLoad from "../../hooks/useImageOnLoad";

function ImageCircle({ src, alt, hover = false }) {
  const { handleImageOnLoad, style } = useImageOnLoad();
  return (
    <img
      onLoad={handleImageOnLoad}
      className={`w-16 aspect-square rounded-full ${
        hover && "group-hover:scale-[115%]"
      } duration-300 ${style} object-cover object-center`}
      src={src}
      alt={alt}
    />
  );
}

ImageCircle.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hover: PropTypes.bool,
};
export default ImageCircle;
