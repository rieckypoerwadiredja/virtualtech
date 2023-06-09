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
import Main from "../component/Structure/Main";
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
