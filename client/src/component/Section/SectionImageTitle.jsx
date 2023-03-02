import React from "react";

// Component
import ImageRounded from "../Image/ImageRounded";
import PhotoAuthor from "../Desc/PhotoAuthor";
import SectionTitleDescWithBigText from "./SectionTitleDescWithBigText";

function SectionImageTitle() {
  const data = {
    sectionImage: {
      title: "Start Drone",
      author: "Photo by unsplash.com",
      image: {
        name: "drone man",
        src: "./drone-man.jpg",
      },
    },
    sectionBigText: {
      bigText: "1400+",
      title: "Minutes spent controlling devices drone the air.",
      desc: "So many people have already trusted us. This number is constantly growing thanks to the positive feedback from our customers.",
    },
  };
  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10">
      <div className="flex flex-col">
        <ImageRounded img={data.sectionImage.image} />
        <div className="mt-8">
          <PhotoAuthor
            title={data.sectionImage.title}
            author={data.sectionImage.author}
          />
        </div>
      </div>
      <SectionTitleDescWithBigText
        bigText={data.sectionBigText.bigText}
        title={data.sectionBigText.title}
        desc={data.sectionBigText.desc}
      />
    </div>
  );
}

export default SectionImageTitle;
