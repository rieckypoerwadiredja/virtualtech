import React from "react";

// Component
import NavHero from "./NavHero";
function Menu() {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-screen bg-blackScreen-800">
      <NavHero animation navigation />
    </div>
  );
}

export default Menu;
