import React, { useContext } from "react";

// Component
import ProfileWithCompany from "../Profile/ProfileWithCompany";
import SectionMainFooter from "../Section/SectionMainFooter";
// Context
import FooterContext from "../../context/FooterContext";
import Copyright from "./Copyright";

function Footer() {
  const { img, title, desc, contact, social } = useContext(FooterContext);
  return (
    <>
      <div className="pt-[50px] smXL:pt-[80px] xlX:py-[90px] px-web-sm smXL:px-web-md xlX:px-web-lg bg-blackFont-800 text-white">
        <ProfileWithCompany src={img.src} alt={img.alt} />
        <SectionMainFooter title={title} desc={desc} button={contact} />
      </div>
      <Copyright socialMedia={social} />
    </>
  );
}

export default Footer;
