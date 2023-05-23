import React from "react";
import PropTypes from "prop-types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import Controllers from "./Controllers";
// Hooks
import useImageOnLoad from "../../hooks/useImageOnLoad";

function SwiperSlider({ data, controllers = true }) {
  const { handleImageOnLoad, imgLoading } = useImageOnLoad();

  return (
    <>
      <Swiper
        className="relative w-full h-full flex"
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        loop={true}
      >
        {controllers && (
          <Controllers
            prevClass="swiper-button-prev"
            nextClass="swiper-button-next"
          />
        )}
        {data.map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full min-w-full bg-red-500 bg-center object-cover"
          >
            <img
              onLoad={handleImageOnLoad}
              className={`w-full h-full min-w-full bg-center object-cover`}
              src={image}
              alt={data.name}
            />
            {imgLoading && (
              <div className="absolute top-0 left-0 w-full h-full before:block before:content-center before:z-10 bg-blackScreen-800 before:opacity-50"></div>
            )}
          </SwiperSlide>
        ))}
        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full before:block before:content-center before:z-10 bg-blackScreen-800 before:opacity-50"></div>
        )}
      </Swiper>
    </>
  );
}

SwiperSlider.propTypes = {
  data: PropTypes.array.isRequired,
  controllers: PropTypes.bool.isRequired,
};

export default SwiperSlider;
