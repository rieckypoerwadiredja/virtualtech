import React from "react";
// component
import SectionTitleDesc from "./SectionTitleDesc";
import SectionButton from "../Button/SectionButton";
import ImageRounded from "../Image/ImageRounded";

function SectionDescription() {
  const data = {
    section: {
      title: {
        title: "Professional shots",
        subTitle: "Photography and video",
      },
      desc: [
        "We provide professional photo and video creation services during drone flights. We have the necessary equipment and skills to carry out the most advanced projects that are used in internet marketing. We have been operating in the industry for 8 years and during this time we have created many projects for our clients.",
        "We also conduct training and support young people to expand their knowledge in the field of aviation",
      ],
      image: {
        src: "./street-view.jpg",
        name: "street drone view",
      },
    },
    button: [
      {
        id: 1,
        text: "High quality 8K",
        redirectTo: "/aboutus",
      },
      {
        id: 2,
        text: "Great experience",
        redirectTo: "/aboutus",
      },
      {
        id: 3,
        text: "Attractive price offer",
        redirectTo: "/aboutus",
      },
    ],
  };
  return (
    <div className="py-section-sm overflow-x-visible text-blackFont-800 mdXL:w-1/2 mdXL:mt-16 lg:mt-40 mdXL:ml-10 flex flex-col justify-between">
      <div>
        <SectionTitleDesc data={data.section} />
      </div>

      <div className="text-blackFont-800 mt-10 mb-8 lg:mb-16 w-full">
        <SectionButton texts={data.button} />
      </div>

      <div className="relative overflow-x-visible w-[calc(100%+(1.75rem*2))] smXL:w-[calc(100%+((1.75rem+1.25rem)*2))] -ml-section-sm smXL:-ml-[calc(1.75rem+1.25rem)]">
        <ImageRounded img={data.section.image} overlap />
      </div>
    </div>
  );
}

export default SectionDescription;
