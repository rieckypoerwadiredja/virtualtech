import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Icon
import { FaLongArrowAltRight } from "react-icons/fa";
// component
import Paragraph from "../Desc/Paragraph";

function MainButton({ text, redirectTo, dark = true, onClick = false }) {
  return (
    <Link
      className={`w-full smXL:w-fit text-left py-5 px-6 flex justify-between items-center bg-transparent border-trans-white-400 border-[1px] rounded-full h-[70px] transition-all ease-out ${
        dark
          ? "hover:bg-white hover:text-blackFont-800"
          : "hover:bg-blackFont-800 hover:text-white"
      } duration-500`}
      to={!onClick && redirectTo}
      onClick={!redirectTo && onClick}
    >
      <Paragraph bold text={text} />

      <FaLongArrowAltRight size={20} className="ml-[40px]" />
    </Link>
  );
}

MainButton.protoTypes = {
  text: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default MainButton;
