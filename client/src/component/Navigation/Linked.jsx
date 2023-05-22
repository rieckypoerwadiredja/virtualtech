import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Linked({ to, text }) {
  return (
    <Link
      className="text-custome-green-800 font-semibold text-lg tracking-wide underline"
      to={to}
    >
      {text}
    </Link>
  );
}

Linked.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Linked;
