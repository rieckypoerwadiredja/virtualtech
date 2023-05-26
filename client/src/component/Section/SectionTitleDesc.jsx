import React from "react";
import PropTypes from "prop-types";
// Component
import TitleSectionWithTopSubTitle from "../Desc/TitleSectionWithTopSubTitle";
import Paragraph from "../Desc/Paragraph";
import PageTitle from "../Heading/PageTitle";

function SectionTitleDesc({ title, subTitle, desc, bigTitle }) {
  return (
    <>
      {bigTitle && (
        <div className="flex flex-col gap-y-10 mb-10">
          <PageTitle
            withImage={false}
            highlighter={bigTitle.highlighter}
            text={bigTitle.heading}
          />
        </div>
      )}

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
  bigTitle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.array.isRequired,
};
export default SectionTitleDesc;
