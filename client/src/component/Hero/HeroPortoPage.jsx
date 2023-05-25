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
    <MenuProvider value={{ menuOpen, setMenuOpen }}>
      <header className="relative w-full h-auto mt-28 px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-black flex flex-col justify-between items-start overflow-hidden">
        <HeroSection
          withImage={false}
          sectionButton={false}
          sectionContentType={false}
        />
      </header>
      {/* <NavbarPrivider>
        <Navbar dark fixed animation />
      </NavbarPrivider> */}
      {menuOpen && <Menu />}
    </MenuProvider>
  );
}

export default HeroPortoPage;
