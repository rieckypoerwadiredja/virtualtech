import React from "react";
import PropTypes from "prop-types";
import { useSwiper } from "swiper/react";

// Icon
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
function Controllers({
  prevClass = "swiper-button-prev",
  nextClass = "swiper-button-next",
}) {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="hidden absolute top-0 left-0 cursor-pointer z-20 smXL:flex justify-center items-center w-[8%] h-full duration-200 hover:bg-custome-green-400/50"
        onClick={() => swiper.slidePrev()}
      >
        <button
          className={`p-3 text-blackFont-800 bg-white rounded-full ${prevClass}`}
        >
          <MdOutlineKeyboardArrowLeft size={20} />
        </button>
      </div>

      <div
        className="hidden absolute top-0 right-0 cursor-pointer z-20 smXL:flex justify-center items-center w-[8%] h-full duration-200 hover:bg-custome-green-400/50"
        onClick={() => swiper.slideNext()}
      >
        <button
          className={`p-3 text-blackFont-800 bg-white rounded-full ${nextClass}`}
        >
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>
    </>
  );
}

Controllers.propTypes = {
  nextClass: PropTypes.string.isRequired,
  prevClass: PropTypes.string.isRequired,
};

export default Controllers;
