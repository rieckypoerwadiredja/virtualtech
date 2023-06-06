import React from "react";

function LeftSection({ children }) {
  return (
    <div className="flex flex-col py-section-sm w-full mdXL:w-1/2 mdXL:mr-10 xlX:mr-16">
      {children}
    </div>
  );
}

export default LeftSection;
