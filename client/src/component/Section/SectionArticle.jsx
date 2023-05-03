import React from "react";
// Component
import SectionTitleDesc from "./SectionTitleDesc";
import MainButton from "../Button/MainButton";
import PortoCard from "../Card/PortoCard";
// Context
import { PortoCardProvider } from "../../context/PortoCardContext";
import { DetailPortoState } from "../../context/DetailPortoContext";
import ArticleDesc from "../Desc/ArticleDesc";
function SectionArticle() {
  const { creator, title, type } = DetailPortoState().data.portfolio[0];

  return (
    <div className="mdXL:flex">
      <div className="flex flex-col gap-y-10 w-[65%] pr-[5%]">
        <ArticleDesc />
      </div>
      <div className="relative w-[35%]">
        <div className="absolute -top-[65%] h-[165%] right-0 pl-[5%]">
          <PortoCardProvider
            value={{
              background: null,
              bgPadding: true,
              image: null,
              creator,
              title,
              type,
            }}
          >
            <PortoCard animation darkGreen={false} />
          </PortoCardProvider>
        </div>
      </div>
    </div>
  );
}

export default SectionArticle;
