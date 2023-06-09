import React, { useContext } from "react";
// Component
import CheckCard from "./CheckCard";
import MainContext from "../../context/MainContext";
import SectionTitleHeadingTwo from "../Heading/SectionTitleHeadingTwo";
// Context
import { CheckCardProvider } from "../../context/CheckCardContext";

function CheckCardList() {
  const { title, checkCard } = useContext(MainContext).sectionCheckCards;
  return (
    <>
      {title && <SectionTitleHeadingTwo textParser={title ? title : ""} />}
      <div className="flex flex-col smXL:flex-row gap-y-10 smXL:gap-y-0 smXL:gap-x-10">
        {checkCard.map((data) => (
          <CheckCardProvider value={data}>
            <CheckCard />
          </CheckCardProvider>
        ))}
      </div>
    </>
  );
}

export default CheckCardList;
