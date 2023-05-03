import React from "react";
import PropTypes from "prop-types";
// component
import Navbar from "./Navbar";
import NavSection from "./NavSection";
import NavbarPrivider from "../../context/NavbarContext";
import NavbarOpenPrivider from "../../context/NavbarOpen";

function NavHero({ navigation = false }) {
  return (
    <header className="relative z-10 w-full h-[732px] smXL:h-[110vh] smXL:min-h-[650px] px-web-sm smXL:px-web-md xlX:px-web-lg pt-5 text-white flex flex-col justify-between items-start overflow-hidden">
      <NavbarPrivider>
        <Navbar />
      </NavbarPrivider>
      <NavbarOpenPrivider>
        <NavSection navigation={navigation} />
      </NavbarOpenPrivider>
      <div className="relative ml-[56%] smXL:ml-[59%] w-1/2 h-[50px] bg-white"></div>
    </header>
  );
}

NavHero.propTypes = {
  navigation: PropTypes.bool,
};

export default NavHero;
