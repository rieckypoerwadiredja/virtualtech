import React from "react";
// COmponent
import SectionTitleDesc from "../Section/SectionTitleDesc";
import MainButton from "../Button/MainButton";
// Context
import { DetailPortoState } from "../../context/DetailPortoContext";
function ArticleDesc() {
  const { title, desc, subTitle } =
    DetailPortoState().data.portfolio[0].portofolio.portoDesc;

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
