import React from "react";

function RightSection({ children }) {
  return (
    <div className="py-section-sm overflow-x-visible text-blackFont-800 mdXL:w-1/2 mdXL:mt-[70px] lg:mt-40 mdXL:ml-10 xlX:ml-16 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default RightSection;
