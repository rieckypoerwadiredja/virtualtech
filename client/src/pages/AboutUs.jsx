import React, { useEffect } from "react";
// Component
import HeroStructure from "../component/Hero/HeroStructure";
import SplitHero from "../component/Hero/SplitHero";
import LeftSection from "../component/Section/SplitSection/LeftSection";
import Main from "../component/Structure/Main";
import RightSection from "../component/Section/SplitSection/RightSection";
import Footer from "../component/Footer/Footer";
import Paragraph from "../component/Desc/Paragraph";
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import SliderProvider from "../context/SliderContext";
import Slider from "../component/Slider/Slider";
import SectionQuoteWithMiniTitleDesc from "../component/Section/SectionQuoteWithMiniTitleDesc";
import SectionImageAuthorWithTitleDesc from "../component/Section/SectionImageAuthorWithTitleDesc";
import CheckCardList from "../component/Card/CheckCardList";
// Context
import { FooterProvider } from "../context/FooterContext";
import { HeaderProvider } from "../context/HeaderContext";
// Data
import jsonData from "../data/data.json";
import { MainProvider } from "../context/MainContext";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderProvider value={jsonData.aboutusPage.hero}>
        <HeroStructure defaultNavigation={true}>
          <SplitHero />
        </HeroStructure>
      </HeaderProvider>

      <MainProvider value={jsonData.aboutusPage.section}>
        <Main>
          <div className="flex flex-col mdXL:flex-row">
            <LeftSection addClass="mdXL:flex-col-reverse">
              <SectionImageAuthorWithTitleDesc />
            </LeftSection>
            <RightSection>
              <Paragraph bold text="About mission" />
              <SectionQuoteWithMiniTitleDesc />
              <CheckCardList />
            </RightSection>
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

export default AboutUs;
