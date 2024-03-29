import React, { useEffect, useState } from "react";
// Component
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
import Slider from "../component/Slider/Slider";
import Navbar from "../component/Navigation/Navbar";
import Menu from "../component/Navigation/Menu";
import Main from "../component/Structure/Main";

// Context
import { FooterProvider } from "../context/FooterContext";
import SliderProvider from "../context/SliderContext";
import { MainProvider } from "../context/MainContext";
import { MenuProvider } from "../context/Menu";
import NavbarPrivider from "../context/NavbarContext";
// Data
import jsonData from "../data/data.json";
import Head from "../component/Structure/Head";

function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head
        title="Virtual Technology - Privacy Policy Agrement"
        desc="Virtual© — creative agency that creating content design. We have knowledge and provide landscape photography services for our advanced clients."
        keyword="Virtual Technology, Privacy, Policy, Agrement"
      />

      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <NavbarPrivider>
          <Navbar dark fixed animation />
        </NavbarPrivider>
        {menuOpen && <Menu />}
      </MenuProvider>

      <MainProvider value={jsonData.privacyPolicy}>
        <Main addClass="flex flex-col gap-y-14">
          <SectionDetailPorto />
          <SliderProvider>
            <Slider />
          </SliderProvider>
        </Main>
      </MainProvider>
      <FooterProvider value={jsonData.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default PrivacyPolicy;
