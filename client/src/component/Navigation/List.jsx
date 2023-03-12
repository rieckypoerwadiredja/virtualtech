import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
// Component
function List({ text, redirectTo }) {
  return (
    <Link
      to={redirectTo}
      className="relative group flex items-center h-fit w-0 hover:w-full max-w-fit duration-500 py-2 hover:px-2 text-title-xs smX:text-title-sm text whitespace-nowrap font-normal text-white bg-white/20 smXL:text-title-md xlX:text-title-lg overflow-x-visible"
    >
      {text}
      <span className="h-full ml-8">
        <AiOutlineArrowRight
          size="30"
          className="text-white group-hover:opacity-0 duration-300"
        />
      </span>
    </Link>
  );
}

export default List;
