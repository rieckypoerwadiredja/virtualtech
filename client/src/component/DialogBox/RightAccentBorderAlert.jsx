import React from "react";
import PropTypes from "prop-types";

function RightAccentBorderAlert({ message, type }) {
  const title = type === "warn" && "Be Warned";
  return (
    <div
      className={`fixed bottom-5 z-40 right-5 ${
        type === "warn" && "bg-orange-100/80 border-orange-500 text-orange-700"
      } text-right border-r-4 p-4`}
      role="alert"
    >
      <p class="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
}

RightAccentBorderAlert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RightAccentBorderAlert;
