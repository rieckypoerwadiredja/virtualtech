import React, { useEffect } from "react";

// Component
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import Slider from "../component/Slider/Slider";
import Footer from "../component/Footer/Footer";
import SectionPortoCard from "../component/Section/SectionPortoCard";
import Main from "../component/Structure/Main";

// Context
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import { MainProvider } from "../context/MainContext";
import SliderProvider from "../context/SliderContext";

// Data
import jsonData from "../data/data.json";
import HeroStructure from "../component/Hero/HeroStructure";

// SEO
import Head from "../component/Structure/Head";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head
        title="Virtual Technology - Portfolio"
        desc="Virtual© — creative agency that creating content design. We have knowledge and provide landscape photography services for our advanced clients."
        keyword="Virtual Technology, Portfolio"
      />
      <HeaderProvider value={jsonData.portfolioPage.hero}>
        <HeroStructure defaultNavigation={true}>
          <HeroPortoPage />
        </HeroStructure>
      </HeaderProvider>

      <MainProvider value={jsonData.portfolioPage.section}>
        <Main>
          <SectionPortoCard />
          <IntermedietesSection
            btnText="Contact with agency"
            redirectTo="/contact"
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

export default Portfolio;
