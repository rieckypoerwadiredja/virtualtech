import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Icon
import { FaLongArrowAltRight } from "react-icons/fa";
// component
import BigParagraph from "../Desc/BigParagraph";

function ExcessButoon({ text, redirectTo }) {
  return (
    <Link
      className="w-full min-w-fit text-left py-5 smXL:px-6 flex justify-between items-center h-[70px] group transition-all ease-out hover:bg-[#EAEDE1] border-b-[0.3px] border-gray-300 hover:border-[#BCC98C] hover:duration-500 hover:text-blackFont-800"
      to={redirectTo}
    >
      <BigParagraph bold text={text} />

      <FaLongArrowAltRight size={20} className="ml-0 sm:ml-[40px] w-fit" />
    </Link>
  );
}

ExcessButoon.protoTypes = {
  text: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default ExcessButoon;
