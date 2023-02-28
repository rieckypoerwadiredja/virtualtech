import React from "react";
import PropTypes from "prop-types";

function ImageRounded({ img, overlap = false }) {
  if (overlap) {
    return (
      <img
        className="w-[110%] h-[330px] lg:h-[470px] rounded-bl-[3rem] bg-center object-cover"
        src={img}
        alt="drone man"
      />
    );
  }
  return (
    <img
      className="w-full h-[330px] smXL:h-auto rounded-bl-[3rem] bg-center object-cover"
      src={img}
      alt="drone man"
    />
  );
}

ImageRounded.protTypes = {
  img: PropTypes.string.isRequired,
  overlap: PropTypes.bool,
};
export default ImageRounded;
