import React, { useState } from "react";
// Component
import Navbar from "../Navigation/Navbar";
import Menu from "../Navigation/Menu";
import HeroSection from "./HeroSection";
// Context
import { MenuProvider } from "../../context/Menu";

function HeroPortoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full h-auto mt-36 px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-black flex flex-col justify-between items-start overflow-hidden">
      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <Navbar dark fixed animation />
        {menuOpen && <Menu />}
      </MenuProvider>
      <HeroSection
        withImage={false}
        sectionButton={false}
        sectionContentType={false}
      />
      {/* <div className="relative ml-[56%] smXL:ml-[59%] w-1/2 h-[50px] bg-white"></div> */}
    </header>
  );
}

export default HeroPortoPage;
