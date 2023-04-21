import React from "react";
import PropTypes from "prop-types";

// Icon
import { AiFillStar } from "react-icons/ai";
function GreenStars({ hover = false }) {
  return (
    <div
      className={`w-16 aspect-square rounded-full ${
        hover && "group-hover:scale-[115%]"
      } duration-300 object-cover object-center bg-custome-green-800 rounded-full w-20 h-full aspect-square grid place-items-center`}
    >
      <AiFillStar className="text-3xl" />
    </div>
  );
}

GreenStars.propTypes = {
  hover: PropTypes.bool,
};

export default GreenStars;
