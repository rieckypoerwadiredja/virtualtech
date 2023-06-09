import React from "react";

function Main({ children, addClass }) {
  return (
    <main
      className={`px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto pt-14 ${addClass}`}
    >
      {children}
    </main>
  );
}
export default Main;
