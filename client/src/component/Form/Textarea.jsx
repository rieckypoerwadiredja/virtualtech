import React from "react";
import PropTypes from "prop-types";

function Textarea({
  name,
  title,
  placeholder,
  isRequired = false,
  value,
  getValue,
}) {
  return (
    <div className="flex flex-col gap-y-2 my-5">
      <label
        className="uppercase tracking-[3px] text-base font-semibold text-blackFont-800"
        htmlFor={name}
      >
        {title} {"   "}
        {isRequired && <span className="text-custome-green-800">*</span>}
      </label>
      <textarea
        className="p-6 border-[2px] h-[250px] border-custome-green-800 rounded-md placeholder:uppercase placeholder:text-custome-green-800 font-medium text-xl focus:bg-custome-green-800/20 transition"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => getValue(event.target.value)}
      />
    </div>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  getValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
