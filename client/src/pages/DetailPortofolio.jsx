import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import SliderProvider from "../context/SliderContext";
// Component
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
import Slider from "../component/Slider/Slider";
// Data
import jsonData from "../data/data.json";
import { MainProvider } from "../context/MainContext";
import HeroStructure from "../component/Hero/HeroStructure";
import usePortoDetail from "../hooks/usePortoDetail";

function DetailPortofolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, title, creator } = useParams();
  // const { data, error, loading } = PortosState();

  const searchId = parseInt(id.replace("%", " "));
  const searchCreator = creator.replace("%", " ").toLowerCase();
  const searchTitle = title.replace("%", " ").toLowerCase();
  // console.log(searchId, searchCreator, searchTitle);

  const { data, error, loading } = usePortoDetail(
    searchCreator,
    searchId,
    searchTitle
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || data.error) {
    return <div>Error fetching portfolio details: {data.message}</div>;
  }
  // const findData = data.portfolio.filter((porto) => {
  //   const searchId = porto.id === parseInt(id.replace("%", " "));

  //   const searchCreator =
  //     porto.creator.name.toLowerCase() ===
  //     creator.replace("%", " ").toLowerCase();

  //   const searchTitle =
  //     porto.title.toLowerCase() === title.replace("%", " ").toLowerCase();
  //   // console.log(searchId, searchCreator, searchTitle);
  //   if (!searchId || !searchCreator || !searchTitle) return null;
  //   return porto;
  // });

  return (
    <>
      <HeaderProvider value={data.portofolio.portoHeader}>
        <HeroStructure defaultNavigation={true}>
          <HeroPortoPage />
        </HeroStructure>
      </HeaderProvider>

      <MainProvider value={data}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto flex flex-col gap-y-14">
          <SectionDetailPorto />
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

export default DetailPortofolio;
