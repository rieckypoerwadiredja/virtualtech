import React, { useContext } from "react";
// Component
import SectionTitleDesc from "./SectionTitleDesc";
import ImageWithAuthor from "../Image/ImageWithAuthor";
import MainContext from "../../context/MainContext";
// context
function SectionImageAuthorWithTitleDesc() {
  const {
    title: titleImg,
    author,
    image,
  } = useContext(MainContext).sectionImage;

  const { title, subTitle, desc } = useContext(MainContext).sectionTitleDesc;
  return (
    <>
      <div>
        <SectionTitleDesc title={title} subTitle={subTitle} desc={desc} />
      </div>
      <ImageWithAuthor author={author} title={titleImg} img={image} />
    </>
  );
}

export default SectionImageAuthorWithTitleDesc;
