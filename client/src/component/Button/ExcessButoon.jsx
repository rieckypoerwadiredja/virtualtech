import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// Icon
import { FaLongArrowAltRight } from "react-icons/fa";
// component
import BigParagraph from "../Desc/BigParagraph";
// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ExcessButoon({ text, redirectTo, animate = false }) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 1,
    once: true,
  });

  if (animate) {
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, translateY: "40px" }}
          animate={
            isIntersecting
              ? { opacity: 1, translateY: "0px" }
              : { opacity: 0, translateY: "40px" }
          }
          transition={{ duration: 0.5 }}
        >
          <Link
            className="w-full min-w-fit text-left py-5 smXL:px-6 flex justify-between items-center h-[70px] group transition-all ease-out hover:bg-[#EAEDE1] border-b-[0.3px] border-gray-300 hover:border-[#BCC98C] hover:duration-500 hover:text-blackFont-800"
            to={redirectTo}
          >
            <BigParagraph bold text={text} />

            <FaLongArrowAltRight
              size={20}
              className="ml-0 sm:ml-[40px] w-fit"
            />
          </Link>
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <Link
      className="w-full min-w-fit text-left py-5 smXL:px-6 flex justify-between items-center h-[70px] group transition-all ease-out hover:bg-[#EAEDE1] border-b-[0.3px] border-gray-300 hover:border-[#BCC98C] hover:duration-500 hover:text-blackFont-800"
      to={redirectTo}
    >
      <BigParagraph bold text={text} />

      <FaLongArrowAltRight size={20} className="ml-0 sm:ml-[40px] w-fit" />
    </Link>
  );
}

ExcessButoon.protoTypes = {
  text: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default ExcessButoon;
