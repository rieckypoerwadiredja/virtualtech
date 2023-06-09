import React, { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
// Component
import BigParagraph from "../Desc/BigParagraph";
import Paragraph from "../Desc/Paragraph";
import CheckCardContext from "../../context/CheckCardContext";

function CheckCard() {
  const { count, title, desc } = useContext(CheckCardContext);
  return (
    <div className="flex flex-col gap-y-5 w-full smXL:w-1/2">
      <div className="w-[70px] bg-white aspect-square rounded-full flex justify-center items-center">
        <AiOutlineCheck className="text-custome-green-800 text-2xl" />
      </div>
      <h2 className="text-[70px] font-semibold text-custome-green-800 border-b-[1px] border-slate-300">
        {count}
      </h2>
      <BigParagraph bold text={title} />
      <Paragraph text={desc} />
    </div>
  );
}

export default CheckCard;
