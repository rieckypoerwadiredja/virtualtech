import React, { useEffect } from "react";
// Component
import HeroStructure from "../component/Hero/HeroStructure";
import Footer from "../component/Footer/Footer";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import { MainProvider } from "../context/MainContext";
import SliderProvider from "../context/SliderContext";
// Component
import SectionImageDesc from "../component/Section/SectionImageDesc";
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import SectionForm from "../component/Section/SectionForm";
import Slider from "../component/Slider/Slider";
// Data
import jsonData from "../data/data.json";
import MainHero from "../component/Hero/MainHero";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderProvider value={jsonData.contactPage.hero}>
        <HeroStructure>
          <MainHero />
        </HeroStructure>
      </HeaderProvider>
      <MainProvider value={jsonData.contactPage.section}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto">
          <div className="py-16 flex flex-col gap-y-10 mdXL:flex-row">
            <SectionImageDesc />
            <SectionForm />
          </div>
          <IntermedietesSection
            btnText="Awesome portfolio"
            redirectTo="/portfolio"
            text="About Virtual Strategy"
          />
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

export default Contact;
