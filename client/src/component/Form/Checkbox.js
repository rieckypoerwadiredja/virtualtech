import React from "react";
import PropTypes from "prop-types";

function Checkbox({
  name,
  title,
  placeholder,
  value,
  isRequired = false,
  getValue,
}) {
  return (
    <div className="flex flex-row-reverse gap-x-4 my-5">
      <label
        className="text-base font-medium text-blackFont-800"
        htmlFor={name}
      >
        {title} {"   "}
        {isRequired && <span className="text-custome-green-800">*</span>}
      </label>
      <input
        onChange={(event) => getValue(event.target.value)}
        className="py-5 px-6 border-[2px] cursor-pointer border-custome-green-800 rounded-md placeholder:uppercase placeholder:text-custome-green-800 font-medium text-xl focus:bg-custome-green-800/20 transition"
        type="checkbox"
        value={value}
        name={name}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  getValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Checkbox;
