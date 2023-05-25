import React, { useState } from "react";
// Component
import Navbar from "../Navigation/Navbar";
import Menu from "../Navigation/Menu";
// Context
import { MenuProvider } from "../../context/Menu";
import NavbarPrivider from "../../context/NavbarContext";

function HeroStructure({ children, defaultNavigation = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuProvider value={{ menuOpen, setMenuOpen }}>
      {children}
      {defaultNavigation && (
        <NavbarPrivider>
          <Navbar animation fixed dark />
        </NavbarPrivider>
      )}
      {menuOpen && <Menu />}
      {/* menu for navigation */}
    </MenuProvider>
  );
}

export default HeroStructure;
