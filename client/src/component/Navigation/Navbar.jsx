import React from "react";
import { Link } from "react-router-dom";

// Context
import { MenuConsumer } from "../../context/Menu";
// Component
import Paragraph from "../Desc/Paragraph";
import BurgerButton from "../Button/BurgerButton";
// Icon
import { FaCircleNotch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-[75px] px-[20px] border-2 border-trans-white-400 flex justify-between items-center">
      <Link
        className="font-semibold text-2xl min-w-fit w-[40%] hover:underline"
        to="/"
      >
        VirtualTeach ©
      </Link>
      {/* <Menu /> */}

      <MenuConsumer>
        {({ menuOpen, setMenuOpen }) => {
          return (
            <div
              className="relative burger-menu pl-5 h-full mdXL:pl-0 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BurgerButton menuOpen={menuOpen} />
            </div>
          );
        }}
      </MenuConsumer>

      <div className="hidden mdXL:flex justify-end items-center min-w-fit w-[40%]">
        <div className="p-2 flex justify-center items-center">
          <FaCircleNotch className="text-[14px]" />
        </div>
        <Paragraph text="Drone photography services" medium />
      </div>
    </div>
  );
}

export default Navbar;
