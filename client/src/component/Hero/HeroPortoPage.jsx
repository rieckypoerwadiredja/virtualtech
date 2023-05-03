import React, { useState } from "react";
// Component
import Navbar from "../Navigation/Navbar";
import Menu from "../Navigation/Menu";
import HeroSection from "./HeroSection";
// Context
import { MenuProvider } from "../../context/Menu";
import NavbarPrivider from "../../context/NavbarContext";

function HeroPortoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full h-auto mt-28 px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-black flex flex-col justify-between items-start overflow-hidden">
      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <NavbarPrivider>
          <Navbar dark fixed animation />
        </NavbarPrivider>
        {menuOpen && <Menu />}
      </MenuProvider>
      <HeroSection
        withImage={false}
        sectionButton={false}
        sectionContentType={false}
      />
    </header>
  );
}

export default HeroPortoPage;
