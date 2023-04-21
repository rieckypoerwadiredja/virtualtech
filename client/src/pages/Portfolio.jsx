import React, { useEffect } from "react";

// Component
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import Slider from "../component/Slider/Slider";
import Footer from "../component/Footer/Footer";

// Context
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";

// Data
import jsonData from "../data/data.json";
import { MainProvider } from "../context/MainContext";
import SectionPortoCard from "../component/Section/SectionPortoCard";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderProvider value={{ jsonData: jsonData.portfolioPage.hero }}>
        <HeroPortoPage />
      </HeaderProvider>

      <MainProvider value={jsonData.portfolioPage.section}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto">
          <SectionPortoCard />
          <IntermedietesSection
            btnText="Contact with agency"
            redirectTo="/portfolio"
            text="About Virtual Strategy"
          />
          <Slider />
        </main>
      </MainProvider>

      <FooterProvider value={jsonData.homePage.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default Portfolio;
