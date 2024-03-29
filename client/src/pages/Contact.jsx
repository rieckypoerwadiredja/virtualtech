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
import Main from "../component/Structure/Main";
// Data
import jsonData from "../data/data.json";
import MainHero from "../component/Hero/MainHero";
// SEO
import Head from "../component/Structure/Head";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head
        title="Virtual Technology - Contact"
        desc="Virtual© — creative agency that creating content design. We have knowledge and provide landscape photography services for our advanced clients."
        keyword="Virtual Technology, contact"
      />
      <HeaderProvider value={jsonData.contactPage.hero}>
        <HeroStructure>
          <MainHero />
        </HeroStructure>
      </HeaderProvider>
      <MainProvider value={jsonData.contactPage.section}>
        <Main>
          <div className="pb-16 flex flex-col gap-y-10 mdXL:flex-row">
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
        </Main>
      </MainProvider>

      <FooterProvider value={jsonData.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default Contact;
