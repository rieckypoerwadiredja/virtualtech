import React from "react";
import PropTypes from "prop-types";
import Linked from "../Navigation/Linked";

function Checkbox({
  name,
  title,
  placeholder,
  value,
  isRequired = false,
  getValue,
}) {
  return (
    <div className="flex flex-row-reverse gap-x-4">
      <label className="font-medium text-lg text-blackFont-800" htmlFor={name}>
        Click here to indicate that you have read and agree to the terms
        presented in the <Linked to="/privacy-policy" text="Privacy Policy" />{" "}
        agreement. {"   "}
        {isRequired && <span className="text-custome-green-800">*</span>}
      </label>
      <input
        onChange={(event) => getValue(event.target.checked)}
        className="px-6 border-[2px] cursor-pointer border-custome-green-800 rounded-md placeholder:uppercase placeholder:text-custome-green-800 font-medium text-xl focus:bg-custome-green-800/20 transition"
        type="checkbox"
        checked={value}
        name={name}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  getValue: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

export default Checkbox;
