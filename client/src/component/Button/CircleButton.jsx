import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CircleButton({
  text,
  redirectTo,
  dark = false,
  withImage = false,
  animation = false,
}) {
  const AnimatedComponent = motion(Link);
  const animationVariant = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };
  return (
    <AnimatedComponent
      as={Link}
      initial={animation ? "initial" : undefined}
      animate={animation ? "animate" : undefined}
      whileHover={{ scale: 1.05 }}
      variants={animationVariant}
      transition={0.3}
      data-testid="circle-btn"
      className={`relative w-[150px] h-[150px] xlX:w-[200px] xlX:h-[200px] rounded-[50%] aspect-square 
      ${
        dark
          ? "bg-blackScreen-800 border-white border-[2px] hover:text-black group"
          : withImage
          ? "bg-custome-green-400 hover:bg-white hover:text-black"
          : "text-white bg-custome-green-800 hover:bg-blackFont-800 hover:text-white"
      }  
      flex justify-center items-center hover:scale-105 duration-700 transition-all ease-in-out`}
      to={redirectTo}
    >
      {dark && (
        <div className="absolute z-[-1] inset-2 w-auto h-auto scale-0 group-hover:scale-100 duration-500 aspect-square bg-white rounded-full"></div>
      )}
      <p className="font-semibold text-lg xlX::text-[22px] tracking-wide">
        {text}
      </p>
    </AnimatedComponent>
  );
}

CircleButton.propTypes = {
  text: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  animation: PropTypes.bool,
};
export default CircleButton;
