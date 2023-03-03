import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Component
import SectionTitleHeadingTwo from "../Heading/SectionTitleHeadingTwo";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import Quote from "../Desc/Quote";

// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SectionCompanyWords() {
  const data = {
    section: {
      title: {
        title: "Working with technology",
        subTitle: "We created photography from drones.",
      },
      quote:
        "Virtual© — creative agency that creating content design. We have knowledge and provide landscape photography services for our advanced clients.",
    },
  };
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.5,
    once: true,
  });

  return (
    <AnimatePresence>
      <motion.div
        className="py-section-sm pt-14 min-h-fit mdXL:flex"
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
            <MiniTitleDesc
              title={data.section.title.title}
              desc={data.section.title.subTitle}
              dark
            />
          </div>
        </div>
        <div className="mdXL:w-1/2 mdXL:pl-12 xlX:pl-16">
          <Quote text={data.section.quote} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SectionCompanyWords;
