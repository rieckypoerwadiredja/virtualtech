import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useImageOnLoad from "../../hooks/useImageOnLoad";

function ImageRounded({
  img,
  overlap = false,
  noOver = false,
  animation = false,
}) {
  const ref = useRef(null);
  const { handleImageOnLoad, imgLoading } = useImageOnLoad();
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.25,
    once: true,
  });

  const animationVariant = {
    initial: { opacity: 0, translateY: "40px" },
    animateInterseting: { opacity: 1, translateY: "0px" },
    animateNoInterseting: { opacity: 0, translateY: "40px" },
  };

  if (overlap) {
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          className={`relative ${
            !noOver ? "w-[110%]" : "w-full h-[40vh] max-h-[40vh]"
          } h-[330px] lg:h-[470px] rounded-bl-[3rem] overflow-hidden`}
          initial={!animation ? undefined : "initial"}
          animate={
            isIntersecting ? { opacity: 1, translateY: "0px" } : undefined
          }
          transition={{ duration: 0.5 }}
          variants={animationVariant}
        >
          <img
            onLoad={handleImageOnLoad}
            className={`w-full h-full bg-center object-cover`}
            src={img.src}
            alt={img.name}
          />
          {imgLoading && (
            <div className="absolute top-0 left-0 w-full h-full before:block before:content-center before:z-10 bg-blackScreen-800 before:opacity-50"></div>
          )}
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className="w-full h-[330px] mdXL:h-[560px] xlX:h-[620px] rounded-bl-[3rem] overflow-hidden"
        initial={!animation ? undefined : "initial"}
        animate={isIntersecting ? { opacity: 1, translateY: "0px" } : undefined}
        transition={{ duration: 0.5 }}
        variants={animationVariant}
      >
        <img
          onLoad={handleImageOnLoad}
          className={`w-full h-full bg-center object-cover`}
          src={img.src}
          alt={img.name}
        />
        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full before:block before:content-center before:z-10 bg-blackScreen-800 before:opacity-50"></div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

ImageRounded.protTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  overlap: PropTypes.bool,
  animation: PropTypes.bool,
};
export default ImageRounded;
