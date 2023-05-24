import React, { useEffect, useState } from "react";
// Component
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
import Slider from "../component/Slider/Slider";
import Navbar from "../component/Navigation/Navbar";
import Menu from "../component/Navigation/Menu";
// Context
import { FooterProvider } from "../context/FooterContext";
import SliderProvider from "../context/SliderContext";
import { MainProvider } from "../context/MainContext";
import { MenuProvider } from "../context/Menu";
import NavbarPrivider from "../context/NavbarContext";
// Data
import jsonData from "../data/data.json";

function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <NavbarPrivider>
          <Navbar dark fixed animation />
        </NavbarPrivider>
        {menuOpen && <Menu />}
      </MenuProvider>

      <MainProvider value={jsonData.privacyPolicy}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mt-28  mx-auto flex flex-col gap-y-14">
          <SectionDetailPorto />
          <SliderProvider>
            <Slider />
          </SliderProvider>
        </main>
      </MainProvider>
      <FooterProvider value={jsonData.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default PrivacyPolicy;
