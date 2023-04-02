import React from "react";
import PropTypes from "prop-types";
// Component
import ImageCircle from "../Image/ImageCircle";
import CardHeading from "../Heading/CardHeading";
import Paragraph from "../Desc/Paragraph";
import ArrowLink from "../Navigation/ArrowLink";

function SliderCard({ firstIndex = false, data }) {
  return (
    <div
      className={`
      ${
        !firstIndex && "text-black border-l-[2px] border-slate-100 rounded-none"
      }
      ${firstIndex && "bg-custome-green-800 rounded-bl-[60px]"}
      cursor-pointer group 
      flex flex-col justify-between  mr-[20px] py-[50px] px-[30px] min-h-fit h-auto w-[calc(85%-20px)] smXL:w-[calc(66%-20px)] mdXL:w-[calc(33.33%-20px)] min-w-[calc(85%-20px)] smXL:min-w-[calc(66%-20px)] mdXL:min-w-[calc(33.33%-20px)]`}
    >
      <ImageCircle src={data.image.src} alt={data.image.alt} />
      <div className="pt-[37px]">
        <CardHeading text={data.heading} dark={!firstIndex && true} />
      </div>
      <div className="py-[50px]">
        <Paragraph text={data.desc} transparent={firstIndex && true} medium />
      </div>
      <ArrowLink
        text={data.link.text}
        redirectTo={data.link.url}
        bold
        dark={!firstIndex && true}
      />
    </div>
  );
}

SliderCard.propTypes = {
  firstIndex: PropTypes.bool,
};

export default SliderCard;
