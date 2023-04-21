import React, { useEffect, useState } from "react";

// Component
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import Slider from "../component/Slider/Slider";

// Context
import { PortoState } from "../context/PortoContext";
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import { HeaderProvider } from "../context/HeaderContext";

// Data
import jsonData from "../data/data.json";
import { MainProvider } from "../context/MainContext";
import SectionPortoCard from "../component/Section/SectionPortoCard";

function Portfolio() {
  const [porto, setPorto] = useState([]);
  const { data, error, loading } = PortoState();

  useEffect(() => {
    if (data) {
      setPorto(data.portfolio);
    }
  }, [data]);

  if (error) {
    return <h1>Error yg sabarr yeeee</h1>;
  }

  if (loading || !data) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <HeaderProvider value={{ jsonData: jsonData.portfolioPage.hero }}>
        <HeroPortoPage />
      </HeaderProvider>

      <MainProvider value={jsonData.portfolioPage.section}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto">
          <SectionPortoCard porto={porto} />
          <IntermedietesSection
            btnText="Contact with agency"
            redirectTo="/portfolio"
            text="About Virtual Strategy"
          />
          <Slider />
        </main>
      </MainProvider>
    </>
  );
}

export default Portfolio;
