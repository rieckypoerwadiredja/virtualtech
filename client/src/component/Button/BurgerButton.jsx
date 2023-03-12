import React from "react";
import PropTypes from "prop-types";

function BurgerButton({ menuOpen, dark = false }) {
  return (
    <>
      <span
        className={`w-[45px] h-[2px] ${
          dark ? "bg-blackScreen-400" : "bg-white"
        } duration-300 ${
          menuOpen &&
          "absolute top-1/2 right-0 mdXL:-right-[calc(1.12rem+43%)] rotate-45 origin-center"
        }`}
      ></span>
      <span
        className={`w-[45px] h-[2px] mt-[6px] ${
          dark ? "bg-blackScreen-400" : "bg-white"
        } duration-300 ${
          menuOpen &&
          "absolute top-[43%] right-0 mdXL:-right-[calc(1.12rem+43%)] -rotate-45 origin-center mt-0"
        }`}
      ></span>
    </>
  );
}

BurgerButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  dark: PropTypes.bool,
};

export default BurgerButton;
