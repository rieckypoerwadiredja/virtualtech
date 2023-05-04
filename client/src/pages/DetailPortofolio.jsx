import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import { DetailPortoState } from "../context/DetailPortoContext";
// Component
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
// Data
import jsonData from "../data/data.json";
import useFetch from "../hooks/useFetch";
import { MainProvider } from "../context/MainContext";

function DetailPortofolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, title, creator } = useParams();

  const { data, error, loading } = useFetch(
    `https://webster-backend.vercel.app/api/portfolios/${creator}/${id}/${title}`
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <>
      <HeaderProvider
        value={{ jsonData: data.portfolio[0].portofolio.portoHeader }}
      >
        <HeroPortoPage />
      </HeaderProvider>

      <MainProvider value={data.portfolio[0]}>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto flex flex-col gap-y-14">
          <SectionDetailPorto />
        </main>
      </MainProvider>

      <FooterProvider value={jsonData.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default DetailPortofolio;
