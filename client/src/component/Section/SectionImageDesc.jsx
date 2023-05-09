import React, { useContext } from "react";
// Component
import SectionTitleDesc from "./SectionTitleDesc";
import ImageWithAuthor from "../Image/ImageWithAuthor";
// Context
import MainContext from "../../context/MainContext";

function SectionImageDesc() {
  const {
    title: imageTitle,
    author,
    img,
  } = useContext(MainContext).imageDesc.sectionImage;
  const {
    title: descTitle,
    subTitle,
    desc,
  } = useContext(MainContext).imageDesc.sectionDesc;
  return (
    <div className="flex flex-col gap-y-10 mdXL:w-1/2 border-r-[1px] border-slate-300 mdXL:pr-10 mdXL:flex-col-reverse">
      <div>
        <SectionTitleDesc title={descTitle} subTitle={subTitle} desc={desc} />
      </div>
      <ImageWithAuthor author={author} title={imageTitle} img={img} />
    </div>
  );
}

export default SectionImageDesc;
