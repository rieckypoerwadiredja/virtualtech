import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Component
import Paragraph from "../Desc/Paragraph";
// Icon
import { FaLongArrowAltRight } from "react-icons/fa";

function ArrowLink({
  text,
  redirectTo,
  bold = false,
  medium = false,
  dark = false,
}) {
  return (
    <Link className="relative flex items-center" to={redirectTo}>
      <div
        className={`w-0 group-hover:w-full duration-300 h-[2px] rounded absolute -bottom-1 left-0
         ${dark ? "bg-black" : "bg-white"}`}
      ></div>
      <Paragraph text={text} bold={bold} medium={medium} />
      <FaLongArrowAltRight className="ml-3 group-hover:ml-4 duration-300" />
    </Link>
  );
}

ArrowLink.propTypes = {
  text: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
};

export default ArrowLink;
