import React from "react";
import PropTypes from "prop-types";

function BurgerButton({ menuOpen }) {
  return (
    <>
      <span
        className={`w-[45px] h-[2px] bg-white duration-300 ${
          menuOpen &&
          "absolute top-1/2 -right-[calc(1.12rem + 50%)] rotate-45 origin-center"
        }`}
      ></span>
      <span
        className={`w-[45px] h-[2px] mt-[6px] bg-white duration-300 ${
          menuOpen &&
          "absolute top-1/2 -right-[calc(1.12rem + 50%)] -rotate-45 origin-center mt-0"
        }`}
      ></span>
    </>
  );
}

BurgerButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
};

export default BurgerButton;
