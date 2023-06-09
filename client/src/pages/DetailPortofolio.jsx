import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import SliderProvider from "../context/SliderContext";
import { MainProvider } from "../context/MainContext";
// Component
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
import Slider from "../component/Slider/Slider";
import Main from "../component/Structure/Main";
import HeroStructure from "../component/Hero/HeroStructure";
// Data
import jsonData from "../data/data.json";
// Hooks
import usePortoDetail from "../hooks/usePortoDetail";
// SEO
import Head from "../component/Structure/Head";

function DetailPortofolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, title, creator } = useParams();

  const searchId = parseInt(id.replace("%", " "));
  const searchCreator = creator.replace("%", " ").toLowerCase();
  const searchTitle = title.replace("%", " ").toLowerCase();
  // console.log(searchId, searchCreator, searchTitle);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error, loading } = usePortoDetail(
    searchCreator,
    searchId,
    searchTitle
  );

  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        setIsLoading(false);
      }
    }, 1100);
  }, [loading]);

  if (isLoading) {
    return (
      <>
        <div className="relative w-full h-screen">
          <motion.div
            style={{ transformOrigin: "left" }}
            initial={{ opacity: 0, paddingRight: 0 }}
            animate={{ opacity: 1, paddingRight: "10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200/50 overflow-visible min-w-[20%]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-black text-5xl font-normal py-2"
            >
              Loading...
            </motion.p>
          </motion.div>
        </div>
      </>
    );
  }

  if (error || data.error) {
    return <div>Error fetching portfolio details: {data.message}</div>;
  }

  return (
    <>
      <Head
        title={`${data.portofolio.portoDesc.title}`}
        desc="Virtual© — creative agency that creating content design. We have knowledge and provide landscape photography services for our advanced clients."
        keyword="Virtual Technology, Privacy, Policy, Agrement"
        author={`${data.portofolio.img.name}`}
      />
      <HeaderProvider value={data.portofolio.portoHeader}>
        <HeroStructure defaultNavigation={true}>
          <HeroPortoPage />
        </HeroStructure>
      </HeaderProvider>

      <MainProvider value={data}>
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

export default DetailPortofolio;
