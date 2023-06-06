import React, { useContext } from "react";
import PropTypes from "prop-types";
// Component
import Paragraph from "../Desc/Paragraph";
import PageTitle from "../Heading/PageTitle";
import MainButton from "../Button/MainButton";
// Context
import HeaderContext from "../../context/HeaderContext";

function HeroTitleDesc({ withImage = false }) {
  const { heading, mainButton, desc } = useContext(HeaderContext);
  return (
    <>
      <Paragraph text="01" bold />
      <PageTitle
        withImage={withImage}
        highlighter={heading.highlighter}
        text={heading.heading}
      />
      <div
        className={`my-[40px] ${
          withImage ? "text-whiteFont-400" : "text-trans-white-500"
        } `}
      >
        <Paragraph text={desc} />
      </div>
      {mainButton && (
        <MainButton text={mainButton.text} redirectTo={mainButton.redirectTo} />
      )}
    </>
  );
}

HeroTitleDesc.propTypes = {
  withImage: PropTypes.bool,
};
export default HeroTitleDesc;
