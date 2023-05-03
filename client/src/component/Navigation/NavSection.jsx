import React, { useContext } from "react";

import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Component
import Paragraph from "../Desc/Paragraph";
import PageTitle from "../Heading/PageTitle";
import MainButton from "../Button/MainButton";
import CircleButton from "../Button/CircleButton";
import MiniTitleDesc from "../Desc/MiniTItleDesc";
import List from "../Navigation/List";
import HeaderContext from "../../context/HeaderContext";
import { NavbarOpenState } from "../../context/NavbarOpen";

function NavSection({ navigation = false }) {
  const { menu, heading, desc, mainButton, circleButton, titleDesc } =
    NavbarOpenState();
  return (
    <div className="w-full h-[60%] smXL:h-fit flex flex-col mdXL:flex-row mdXL:justify-between max-w-[1532px] mx-auto">
      <motion.div
        initial={{ opacity: 0, translateY: "8%" }}
        animate={{
          opacity: 1,
          translateY: "0%",
          transition: { duration: 0.8, delay: 0 },
        }}
        className="w-full sm:w-[60%] text-white"
      >
        <Paragraph text="01" bold />
        {navigation ? (
          <div className="flex flex-col">
            {menu.map((list) => (
              <List
                key={list.id}
                text={list.text}
                redirectTo={list.redirectTo}
              />
            ))}
          </div>
        ) : (
          <PageTitle highlighter={heading.highlighter} text={heading.heading} />
        )}
        <div className="my-[40px] text-whiteFont-400">
          <Paragraph text={desc} />
        </div>
        <MainButton text={mainButton.text} redirectTo={mainButton.redirectTo} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: "8%" }}
        animate={{
          opacity: 1,
          translateY: "0%",
          transition: { duration: 0.6, delay: 0.2 },
        }}
        className="hidden mdXL:flex flex-col w-[30%] justify-end items-end"
      >
        <div className="w-full flex justify-end items-start pb-10">
          <CircleButton
            text={circleButton.text}
            redirectTo={circleButton.redirectTo}
            dark
          />
        </div>
        <div className="w-full flex flex-col">
          <Paragraph text="02" bold />
          <span className="w-full h-[2px] bg-trans-white-400 my-2"></span>
          <MiniTitleDesc title={titleDesc.title} desc={titleDesc.desc} />
        </div>
      </motion.div>
    </div>
  );
}
NavSection.propTypes = {
  navigation: PropTypes.bool,
};
export default NavSection;
