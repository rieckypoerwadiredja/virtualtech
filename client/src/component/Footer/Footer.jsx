import React, { useContext } from "react";

// Component
import ProfileWithCompany from "../Profile/ProfileWithCompany";
import SectionMainFooter from "../Section/SectionMainFooter";
import Footerc from "../Structure/Footerc";
// Context
import FooterContext from "../../context/FooterContext";
import Copyright from "./Copyright";

function Footer() {
  const { img, title, desc, contact, social } = useContext(FooterContext);
  return (
    <>
      <Footerc>
        <ProfileWithCompany src={img.src} alt={img.alt} />
        <SectionMainFooter title={title} desc={desc} button={contact} />
      </Footerc>
      <Copyright socialMedia={social} />
    </>
  );
}

export default Footer;
