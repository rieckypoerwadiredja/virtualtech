import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Compoent
import LoadingScreen from "../component/Loading/LoadingScreen";
import SectionCompanyWords from "../component/Section/SectionCompanyWords";
import SectionImageTitle from "../component/Section/SectionImageTitle";
import SectionDescription from "../component/Section/SectionDescription";
import IntermedietesSection from "../component/Intermediates/IntermedietesSection";
import Slider from "../component/Slider/Slider";
import Footer from "../component/Footer/Footer";
import HeroStructure from "../component/Hero/HeroStructure";

// Context
import { PortosState } from "../context/PortosContext";
import { HeaderProvider } from "../context/HeaderContext";
import { MainProvider } from "../context/MainContext";
import { FooterProvider } from "../context/FooterContext";
import SliderProvider from "../context/SliderContext";

// Data
import jsonData from "../data/data.json";
import MainHero from "../component/Hero/MainHero";

function Home() {
  const { data, error } = PortosState();

  const [isLoading, setIsLoading] = useState(true);
  const [porto, setPorto] = useState(false); // apakah data sudah diload ?? -> ksh tau untuk jalankan fungsi animasi slide

  useEffect(() => {
    setTimeout(() => {
      if (data) {
        setPorto(true);
      }
    }, 1600); // 1.6 dtk untuk total animasi (delay+duration) text "Loading" sblm slide hijau jika sdh ada data
  }, [data]);

  function onLoadingAnimationDone(loadingStatus) {
    if (loadingStatus) {
      setIsLoading(false);
    }
  }

  // const loading = true
  if (isLoading) {
    return (
      <div className="App">
        <LoadingScreen
          getdata={porto}
          onLoadingAnimationDone={onLoadingAnimationDone}
        />
      </div>
    );
  }
  if (error || data.error) {
    return (
      <div className="App">
        <motion.div
          initial={{ width: "100vw" }}
          animate={{
            width: ["100vw", "0vw"],
            transition: { duration: 0.8, delay: 0.5 },
          }}
          className="absolute top-0 left-0 z-10 bg-custome-green-400 w-full h-screen"
        ></motion.div>
        ERROR BREEE YG SABARR YEEE
        {data.message}
      </div>
    );
  }

  return (
    <>
      {/* slide warna hijau */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{
          width: ["100%", "0%"],
          transition: { duration: 0.8, delay: 0.5 },
        }}
        className="fixed top-0 left-0 z-20 bg-custome-green-400 w-full h-screen"
      ></motion.div>

      <HeaderProvider value={jsonData.homePage.hero}>
        <HeroStructure>
          <MainHero />
        </HeroStructure>
      </HeaderProvider>

      <MainProvider value={jsonData.homePage.section}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto">
          <SectionCompanyWords />
          <div className="flex flex-col mdXL:flex-row">
            <SectionImageTitle />
            <SectionDescription />
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

export default Home;
