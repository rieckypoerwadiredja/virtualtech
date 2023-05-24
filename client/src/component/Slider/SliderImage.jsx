import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import SwiperSlider from "./SwiperSlider";

function SliderImage({ img }) {
  const src = img.src;
  const ref = useRef(null);

  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.25,
    once: true,
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className="w-full h-[330px] mdXL:h-[560px] xlX:h-[620px] rounded-bl-[3rem] overflow-hidden"
        initial={{ opacity: 0, translateY: "40px" }}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "40px" }
        }
        transition={{ duration: 0.5 }}
      >
        <SwiperSlider data={src} controllers />
      </motion.div>
    </AnimatePresence>
  );
}
SliderImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default SliderImage;
