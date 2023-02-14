import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CircleButton({ text, redirectTo }) {
  return (
    <Link
      className="w-[150px] h-[150px] xlX:w-[200px] xlX::h-[200px] rounded-full aspect-square bg-custome-green-400 flex justify-center items-center hover:bg-white hover:scale-105 hover:text-black duration-700 transition-all ease-in-out"
      to={redirectTo}
    >
      <p className="font-semibold text-lg xlX::text-[22px] tracking-wide">
        {text}
      </p>
      ;
    </Link>
  );
}

CircleButton.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CircleButton;
