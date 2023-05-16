import React from "react";
import Paragraph from "../Desc/Paragraph";
import PageTitle from "../Heading/PageTitle";
import MainButton from "../Button/MainButton";

function AlertBox({
  heading,
  mainButton,
  circleButton,
  desc,
  titleDesc,
  onClick,
  success = false,
  warn = false,
  error = false,
}) {
  return (
    <>
      <div className="fixed top-0 left-0 z-20 text-white w-full h-full mdXL:py-[70px] mdXL:px-[20px] mdXL:L:px-[40px] flex justify-center items-center">
        <div
          className="fixed top-0 left-0 z-10 bg-black/50 w-full h-full"
          onClick={() => onClick(false)}
        ></div>
        <div
          className={`mx-auto z-20 shadow-md ${
            success && "bg-custome-green-800"
          } ${warn && "bg-orange-800"} ${
            error && "bg-red-500"
          } py-[70px] px-[20px] smXL:px-[40px] smXL:max-w-[calc(100%-40px)] w-full h-full smXL:h-auto xlX:w-[980px]`}
        >
          <div className="w-full smXL:h-fit flex flex-col gap-y-10 mdXL:justify-between max-w-[1532px] mx-auto">
            <div className="w-full min-h-fit sm:w-[80%] flex flex-col gap-y-5">
              <Paragraph text="Thanks for sending" bold />
              <PageTitle
                withImage={false}
                highlighter="Succesful"
                text="Message sent"
              />
              <Paragraph text="We will reply as soon as possible. Guarantee response within 24 hours!" />
            </div>
            <MainButton text="Thank you" onClick={() => onClick(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertBox;
