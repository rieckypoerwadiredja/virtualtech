import React, { useContext } from "react";
// COmponent
import SectionTitleDesc from "../Section/SectionTitleDesc";
import MainButton from "../Button/MainButton";
// Context
import MainContext from "../../context/MainContext";
function ArticleDesc() {
  const { title, desc, subTitle } =
    useContext(MainContext).portofolio.portoDesc;
  return (
    <>
      <div>
        <SectionTitleDesc title={title} subTitle={subTitle} desc={desc} />
      </div>
      <MainButton text="Contact now" redirectTo="/contact" dark={false} />
    </>
  );
}

export default ArticleDesc;
