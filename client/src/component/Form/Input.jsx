import React from "react";
import PropTypes from "prop-types";

function Input({
  type,
  name,
  title,
  placeholder,
  value,
  isRequired = false,
  getValue,
  errorMessage,
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        className="uppercase tracking-[3px] text-base font-semibold text-blackFont-800"
        htmlFor={name}
      >
        {title} {"   "}
        {isRequired && <span className="text-custome-green-800">*</span>}
      </label>
      <input
        onChange={(event) => getValue(event.target.value)}
        className="py-5 px-6 border-[2px] border-custome-green-800 rounded-md placeholder:uppercase placeholder:text-custome-green-800 font-medium text-xl focus:bg-custome-green-800/20 transition"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
      />
      <p className={`text-red-500 ${!errorMessage && "py-[12px]"}`}>
        {errorMessage}
      </p>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  getValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
