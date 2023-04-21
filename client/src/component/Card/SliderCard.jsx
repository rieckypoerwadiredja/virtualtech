import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Component
import ImageCircle from "../Image/ImageCircle";
import CardHeading from "../Heading/CardHeading";
import Paragraph from "../Desc/Paragraph";
import ArrowLink from "../Navigation/ArrowLink";

// hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SliderCard({ index, data, animation = false }) {
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0,
    once: true,
  });

  if (animation) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, translateY: "40px" }}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "40px" }
        }
        transition={{ delay: index * 0.3, duration: 0.5 }}
        className={`
      ${
        index !== 0 && "text-black border-l-[2px] border-slate-100 rounded-none"
      }
      ${index === 0 && "bg-custome-green-800 rounded-bl-[60px]"}
      cursor-pointer group 
      flex flex-col justify-between  mr-[20px] py-[50px] px-[30px] min-h-fit h-auto w-[calc(85%-20px)] smXL:w-[calc(66%-20px)] mdXL:w-[calc(33.33%-20px)] min-w-[calc(85%-20px)] smXL:min-w-[calc(66%-20px)] mdXL:min-w-[calc(33.33%-20px)]`}
      >
        <ImageCircle src={data.image.src} alt={data.image.alt} hover />
        <div className="pt-[37px]">
          <CardHeading text={data.heading} dark={index !== 0 && true} bold />
        </div>
        <div className="py-[50px]">
          <Paragraph
            text={data.desc}
            transparent={index === 0 && true}
            medium
          />
        </div>
        <ArrowLink
          text={data.link.text}
          redirectTo={data.link.url}
          bold
          dark={index !== 0 && true}
        />
      </motion.div>
    );
  }
  return (
    <div
      className={`
      ${
        index === 0 && "text-black border-l-[2px] border-slate-100 rounded-none"
      }
      ${index === 0 && "bg-custome-green-800 rounded-bl-[60px]"}
      cursor-pointer group 
      flex flex-col justify-between  mr-[20px] py-[50px] px-[30px] min-h-fit h-auto w-[calc(85%-20px)] smXL:w-[calc(66%-20px)] mdXL:w-[calc(33.33%-20px)] min-w-[calc(85%-20px)] smXL:min-w-[calc(66%-20px)] mdXL:min-w-[calc(33.33%-20px)]`}
    >
      <ImageCircle src={data.image.src} alt={data.image.alt} />
      <div className="pt-[37px]">
        <CardHeading text={data.heading} dark={index !== 0 && true} />
      </div>
      <div className="py-[50px]">
        <Paragraph text={data.desc} transparent={index === 0 && true} medium />
      </div>
      <ArrowLink
        text={data.link.text}
        redirectTo={data.link.url}
        bold
        dark={index !== 0 && true}
      />
    </div>
  );
}

SliderCard.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  animation: PropTypes.bool,
};

export default SliderCard;
