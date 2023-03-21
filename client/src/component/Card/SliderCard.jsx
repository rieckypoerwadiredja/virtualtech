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
      ${!firstIndex && "text-black"}
      ${firstIndex && "bg-custome-green-800"}
      cursor-pointer group 
      flex flex-col justify-between  mr-[20px] py-[50px] px-[30px] min-h-fit h-auto rounded-bl-[60px] w-[calc(80%-20px)] smXL:w-[calc(66%-20px)] mdXL:w-[calc(33.33%-20px)] min-w-[calc(80%-20px)] smXL:min-w-[calc(66%-20px)] mdXL:min-w-[calc(33.33%-20px)]`}
    >
      <ImageCircle
        src="https://images.unsplash.com/photo-1523346679608-dbbfe6c549d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDd8fGRyb25lfGVufDB8fHx8MTY1MTMyMTExOQ&ixlib=rb-1.2.1&q=80&w=1080"
        alt="Remote Drone"
      />
      <div className="pt-[37px]">
        <CardHeading text="Experienced crew" dark={!firstIndex && true} />
      </div>
      <div className="py-[50px]">
        <Paragraph
          text="Our specialists will take care of your order, check and talk to you if you have any questions when taking pictures of beautiful landscapes."
          transparent={firstIndex && true}
          medium
        />
      </div>
      <ArrowLink
        text="About us"
        redirectTo="/aboutus"
        bold
        dark={!firstIndex && true}
      />
    </div>
  );
}

SliderCard.propTypes = {
  firstIndex: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
};

export default SliderCard;
