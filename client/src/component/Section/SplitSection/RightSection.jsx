import React from "react";

function RightSection({ children, padTop = false }) {
  return (
    <div
      className={`flex flex-col justify-between gap-y-10 py-section-sm overflow-x-visible text-blackFont-800 mdXL:w-1/2 ${
        padTop && "mdXL:mt-[70px] lg:mt-40"
      } mdXL:ml-10 xlX:ml-16`}
    >
      {children}
    </div>
  );
}

export default RightSection;
