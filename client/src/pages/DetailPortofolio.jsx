import React, { useEffect } from "react";
// Context
import { HeaderProvider } from "../context/HeaderContext";
import { FooterProvider } from "../context/FooterContext";
// Component
import HeroPortoPage from "../component/Hero/HeroPortoPage";
import ImageWithAuthor from "../component/Image/ImageWithAuthor";
import Footer from "../component/Footer/Footer";
// Data
import jsonData from "../data/data.json";
import SectionArticle from "../component/Section/SectionArticle";

function DetailPortofolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderProvider value={{ jsonData: jsonData.detailPortofolioPage.hero }}>
        <HeroPortoPage />
      </HeaderProvider>
      <main className="px-web-sm smXL:px-web-md xlX:px-web-lg max-w-[1532px] mx-auto flex flex-col gap-y-14">
        <ImageWithAuthor
          title="START DRONE"
          author="Photo by unsplash.com"
          img={{
            src: "https://images.unsplash.com/photo-1553165558-424ffa9c4303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            name: "drone",
          }}
        />
        <SectionArticle />
      </main>

      <FooterProvider value={jsonData.homePage.footer}>
        <Footer />
      </FooterProvider>
    </>
  );
}

export default DetailPortofolio;
