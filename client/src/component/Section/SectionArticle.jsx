import React, { useContext } from "react";
// Component
import PortoCard from "../Card/PortoCard";
// Context
import { PortoCardProvider } from "../../context/PortoCardContext";
import ArticleDesc from "../Desc/ArticleDesc";
import MainContext from "../../context/MainContext";

function SectionArticle() {
  const { creator, title, type } = useContext(MainContext);

  return (
    <div className="mdXL:flex">
      <div className="flex flex-col gap-y-10 w-full mdXL:w-[65%] pr-[5%]">
        <ArticleDesc />
      </div>
      <div className="relative w-full mdXL:w-[35%] my-6 mdXL:my-0">
        <div className="relative mdXL:absolute -top-[65%] h-[165%] right-0 mdXL:pl-[5%]">
          <PortoCardProvider
            value={{
              background: null,
              bgPadding: false,
              image: false,
              creator,
              title,
              type,
            }}
          >
            <PortoCard animation hover={false} darkGreen={false} />
          </PortoCardProvider>
        </div>
      </div>
    </div>
  );
}

export default SectionArticle;
