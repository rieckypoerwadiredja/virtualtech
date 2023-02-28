import React from "react";
// Component
import TitleSectionWithTopSubTitle from "../Desc/TitleSectionWithTopSubTitle";
import Paragraph from "../Desc/Paragraph";

function SectionTitleDesc({ data }) {
  return (
    <>
      <TitleSectionWithTopSubTitle
        title={data.title.title}
        subTitle={data.title.subTitle}
      />
      <div className="mt-10">
        {data.desc.map((desc, idx) => (
          <div className="mt-5" key={idx}>
            <Paragraph text={desc} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionTitleDesc;
