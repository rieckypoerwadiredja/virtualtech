import React from "react";
// Component
import HeroStructure from "../component/Hero/HeroStructure";
// Context
import { HeaderProvider } from "../context/HeaderContext";
// Data
import jsonData from "../data/data.json";
import MainHero from "../component/Hero/MainHero";

function AboutUs() {
  return (
    <HeaderProvider value={jsonData.homePage.hero}>
      <HeroStructure>
        <MainHero />
      </HeroStructure>
    </HeaderProvider>
  );
}

export default AboutUs;
