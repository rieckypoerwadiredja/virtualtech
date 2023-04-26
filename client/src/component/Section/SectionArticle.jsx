import React from "react";
// Component
import SectionTitleDesc from "./SectionTitleDesc";
import MainButton from "../Button/MainButton";
import PortoCard from "../Card/PortoCard";
// Context
import { PortoCardProvider } from "../../context/PortoCardContext";

function SectionArticle() {
  const porto = {
    id: 3,
    type: "Working with technology",
    title:
      "All valuable questions and answers for everyone starting their adventure with investment in technologies.",
    creator: {
      name: "Vinicius Moreno",
      desc: "Diagrams and analyzes",
      src: null,
      alt: "drone",
    },
    background: null,
    bgPadding: false,
  };

  return (
    <div className="mdXL:flex">
      <div className="flex flex-col gap-y-10 w-[65%] pr-[5%]">
        <div>
          <SectionTitleDesc
            title="Create professional shots"
            subTitle="Introductory words"
            desc={[
              "What are the best software for Windows and Mac in 2022 according to our agency? After testing many free and paid applications, we have prepared a list of the 10 best and safest programs. We were guided by whether a given program is free and offers the best solutions.",
              "What is the best program in your opinion? Write us a message, if you have any other interesting software, we will be happy to check it!",
            ]}
          />
        </div>
        <MainButton text="Contact now" redirectTo="/contact" dark={false} />
      </div>
      <div className="relative w-[35%]">
        <div className="absolute -top-[65%] h-[165%] right-0 pl-[5%]">
          <PortoCardProvider value={porto}>
            <PortoCard animation darkGreen={false} />
          </PortoCardProvider>
        </div>
      </div>
    </div>
  );
}

export default SectionArticle;
