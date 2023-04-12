import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

// Component
import SectionFooterHeader from "../Heading/SectionFooterHeader";
import CircleButton from "../Button/CircleButton";
import Paragraph from "../Desc/Paragraph";
import MainButton from "../Button/MainButton";

function SectionMainFooter({ title, desc, button }) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 1,
    once: true,
  });
  return (
    <div className="flex justify-between py-web-md">
      <div className="w-full mdXL:w-2/3 smXL:pr-[15%]">
        <SectionFooterHeader text={title} />
        <div className="text-trans-white-800 my-10">
          <Paragraph text={desc} medium />
        </div>
        <motion.div
          ref={ref}
          className="flex mdXL:flex-row flex-col mt-20"
          initial={{ y: "-30px", opacity: 0 }}
          animate={isIntersecting && { y: "0px", opacity: 1 }}
          duration={{ duration: "0.5s", delay: "0.5s" }}
        >
          {button.map((btn, idx) => (
            <span className="mr-3 mb-3" key={idx}>
              <MainButton text={btn.name} redirectTo={btn.redirectTo} />
            </span>
          ))}
        </motion.div>
      </div>
      <div className="hidden mdXL:flex justify-center items-end pr-10 pb-10">
        <CircleButton text="Get in touch" redirectTo="/contact" dark />
      </div>
    </div>
  );
}

SectionMainFooter.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  button: PropTypes.array.isRequired,
};

export default SectionMainFooter;
