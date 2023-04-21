import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Context
import MenuContext from "../../context/Menu";
import HeaderContext from "../../context/HeaderContext";
// Component
import Paragraph from "../Desc/Paragraph";
import BurgerButton from "../Button/BurgerButton";
// Icon
import { FaCircleNotch } from "react-icons/fa";
// Hooks
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function Navbar({ dark = false, fixed = false, animation = false }) {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, {
    threshold: 0.25,
    once: true,
  });
  const { navBrand, navRight } =
    useContext(HeaderContext).jsonData.navigationHero.navbar;

  if (animation) {
    return (
      <motion.nav
        className={`w-full h-[75px] px-[20px] border-[1px] z-[9] ${
          dark ? "border-slate-300 shadow-md" : "border-trans-white-400"
        } ${
          fixed &&
          "fixed inset-web-sm smXL:inset-web-md xlX:inset-web-lg max-w-[calc(100%-40px)] smXL:max-w-[calc(100%-80px)] xlX:max-w-[calc(100%-160px)] top-5 w-full bg-white"
        } flex justify-between items-center`}
        initial={{ opacity: 0, translateY: "30px" }}
        ref={ref}
        animate={
          isIntersecting
            ? { opacity: 1, translateY: "0px" }
            : { opacity: 0, translateY: "30px" }
        }
        transition={{ duration: 0.5 }}
      >
        <Link
          className="font-semibold text-2xl min-w-fit w-[40%] hover:underline"
          to="/"
        >
          {navBrand}
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
          <Paragraph text={navRight} medium />
        </div>
      </motion.nav>
    );
  }
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
        {navBrand}
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
        <Paragraph text={navRight} medium />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  animation: PropTypes.bool,
};
export default Navbar;
