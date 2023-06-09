import React, { useContext } from "react";
// Component
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import Quote from "../Desc/Quote";
// Context
import MainContext from "../../context/MainContext";

function SectionQuoteWithMiniTitleDesc() {
  const { quote, title, desc } = useContext(MainContext).sectionQuote;
  return (
    <div className="flex flex-col gap-y-10">
      <Quote text={quote} />
      <div>
        <MiniTitleDesc title={title} desc={desc} dark />
      </div>
    </div>
  );
}

export default SectionQuoteWithMiniTitleDesc;
