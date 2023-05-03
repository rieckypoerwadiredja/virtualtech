import React, { useEffect } from "react";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
import DetailPortoContext from "../context/DetailPortoContext";
// Component
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import Footer from "../component/Footer/Footer";
import SectionDetailPorto from "../component/Section/SectionDetailPorto";
// Data
import jsonData from "../data/data.json";

function DetailPortofolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TODO: 1. buat pemanggilan API disini
  //  TODO: 2. taro api untuk header / hero ke provider header
  // TODO: 3. supaya ga buat 2x pemanggilan API ganti context DetailPortoCOntext ke maincontext aja, jd data mengalir semua dari atas (index utama) ke bawah (childern)
  return (
    <>
      <HeaderProvider value={{ jsonData: jsonData.detailPortofolioPage.hero }}>
        <HeroPortoPage />
      </HeaderProvider>

      <DetailPortoContext>
        <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto flex flex-col gap-y-14">
          <SectionDetailPorto />
        </main>
      </DetailPortoContext>

      <FooterProvider value={jsonData.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default DetailPortofolio;
