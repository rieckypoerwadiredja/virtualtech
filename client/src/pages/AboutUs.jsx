import React from "react";
// Component
import HeroStructure from "../component/Hero/HeroStructure";
import SplitHero from "../component/Hero/SplitHero";
import ImageWithAuthor from "../component/Image/ImageWithAuthor";
import SectionTitleDesc from "../component/Section/SectionTitleDesc";
import LeftSection from "../component/Section/SplitSection/LeftSection";
import Main from "../component/Structure/Main";
// Context
import { HeaderProvider } from "../context/HeaderContext";
// Data
import jsonData from "../data/data.json";

function AboutUs() {
  return (
    <>
      <HeaderProvider value={jsonData.aboutusPage.hero}>
        <HeroStructure defaultNavigation={true}>
          <SplitHero />
        </HeroStructure>
      </HeaderProvider>
      <Main>
        <LeftSection>
          <div>
            <SectionTitleDesc
              title="New technology"
              subTitle="Working with technology"
              desc={[
                "Thanks to the experience of our staff, we have learned to achieve professional quality. We have optical image stabilization, which is appreciated as one of the best available on the market.",
                "During this time learned a lot of experience. Over 20 years of experience in the internet industry. Virtual Technology is a platform supporting technology fun providing software that makes it easier to work in your place.",
              ]}
            />
          </div>
          <ImageWithAuthor
            author="unsplash.com"
            title="START DRONE"
            img={{
              name: "drone man",
              src: "./assets/images/tiny_image/drone-man.jpg",
            }}
          />
        </LeftSection>
      </Main>
    </>
  );
}

export default AboutUs;
