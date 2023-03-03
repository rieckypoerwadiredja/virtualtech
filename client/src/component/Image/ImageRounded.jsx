import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ImageRounded({ img, overlap = false }) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.25,
    once: true,
  });

  if (overlap) {
    return (
      <AnimatePresence>
        <motion.img
          className="w-[110%] h-[330px] lg:h-[470px] rounded-bl-[3rem] bg-center object-cover"
          src={img.src}
          alt={img.name}
          ref={ref}
          initial={{ opacity: 0, translateY: "40px" }}
          animate={
            isIntersecting
              ? { opacity: 1, translateY: "0px" }
              : { opacity: 0, translateY: "40px" }
          }
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    );
    // return (
    //   <img
    //     className="w-[110%] h-[330px] lg:h-[470px] rounded-bl-[3rem] bg-center object-cover"
    //     src={img}
    //     alt="drone man"
    //   />
    // );
  }
  return (
    <AnimatePresence>
      <motion.img
        className="w-full h-[330px] smXL:h-auto rounded-bl-[3rem] bg-center object-cover"
        src={img.src}
        alt={img.name}
        ref={ref}
        initial={{ opacity: 0, translateY: "40px" }}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "40px" }
        }
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  );
}

ImageRounded.protTypes = {
  img: PropTypes.objectOf(PropTypes.string).isRequired,
  overlap: PropTypes.bool,
};
export default ImageRounded;
