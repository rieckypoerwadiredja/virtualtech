import React, { useState } from "react";
// Component
import Hero from "./Hero";
import Navbar from "../Navigation/Navbar";
import Menu from "../Navigation/Menu";
// Context
import { MenuProvider } from "../../context/Menu";
import NavbarPrivider from "../../context/NavbarContext";

function MainHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuProvider value={{ menuOpen, setMenuOpen }}>
      <Hero />
      <NavbarPrivider>
        <Navbar fixed dark />
      </NavbarPrivider>
      {menuOpen && <Menu />}
      {/* menu for navigation */}
    </MenuProvider>
  );
}

export default MainHero;
