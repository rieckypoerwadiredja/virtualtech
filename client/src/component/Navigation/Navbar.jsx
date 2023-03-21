import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import MenuContext from "../../context/Menu";
// Component
import Paragraph from "../Desc/Paragraph";
import BurgerButton from "../Button/BurgerButton";
// Icon
import { FaCircleNotch } from "react-icons/fa";

function Navbar({ dark = false, fixed = false }) {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  return (
    <nav
      className={`w-full h-[75px] px-[20px] border-[1px] z-[9] ${
        dark ? "border-slate-300 shadow-md" : "border-trans-white-400"
      } ${
        fixed &&
        "fixed inset-web-sm smXL:inset-web-md xlX:inset-web-lg max-w-[calc(100%-40px)] smXL:max-w-[calc(100%-80px)] xlX:max-w-[calc(100%-160px)] top-5 w-full bg-white"
      } flex justify-between items-center`}
    >
      <Link
        className="font-semibold text-2xl min-w-fit w-[40%] hover:underline"
        to="/"
      >
        VirtualTeach ©
      </Link>

      {/* <Menu /> */}
      <div
        className="relative burger-menu pl-5 h-full mdXL:pl-0 flex flex-col justify-center items-center cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BurgerButton menuOpen={menuOpen} dark={dark} />
      </div>

      <div className="hidden mdXL:flex justify-end items-center min-w-fit w-[40%]">
        <div className="p-2 flex justify-center items-center">
          <FaCircleNotch className="text-[14px]" />
        </div>
        <Paragraph text="Drone photography services" medium />
      </div>
    </nav>
  );
}

export default Navbar;
