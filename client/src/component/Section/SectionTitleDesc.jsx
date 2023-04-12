import React from "react";
import PropTypes from "prop-types";
// Component
import TitleSectionWithTopSubTitle from "../Desc/TitleSectionWithTopSubTitle";
import Paragraph from "../Desc/Paragraph";

function SectionTitleDesc({ title, subTitle, desc }) {
  return (
    <>
      <TitleSectionWithTopSubTitle title={title} subTitle={subTitle} />
      <div className="mt-10">
        {desc.map((desc, idx) => (
          <div className="mt-5" key={idx}>
            <Paragraph text={desc} />
          </div>
        ))}
      </div>
    </>
  );
}

SectionTitleDesc.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.array.isRequired,
};
export default SectionTitleDesc;
