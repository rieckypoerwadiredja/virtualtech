import React from "react";

function LeftSection({ children, addClass }) {
  return (
    <div
      className={`flex flex-col gap-y-14 py-section-sm w-full mdXL:w-1/2 mdXL:mr-10 xlX:mr-16 ${addClass}`}
    >
      {children}
    </div>
  );
}

export default LeftSection;
