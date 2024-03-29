import React, { useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Component
import SectionTitleHeadingTwo from "../Heading/SectionTitleHeadingTwo";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import Quote from "../Desc/Quote";

// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// Context
import MainContext from "../../context/MainContext";

function SectionCompanyWords() {
  const { title, quote } = useContext(MainContext).companyWord;

  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.5,
    once: true,
  });

  return (
    <AnimatePresence>
      <motion.div
        className="py-section-sm min-h-fit mdXL:flex"
        ref={ref}
        initial={{ opacity: 0, translateY: "40px" }}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "40px" }
        }
        transition={{ duration: 0.5 }}
      >
        <div className="w-full py-7 mdXL:w-1/2">
          <SectionTitleHeadingTwo textParser="Technology <br/> drones" />
          <div className="mt-7">
            <MiniTitleDesc title={title.title} desc={title.subTitle} dark />
          </div>
        </div>
        <div className="mdXL:w-1/2 mdXL:pl-12 xlX:pl-16">
          <Quote text={quote} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SectionCompanyWords;
