import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Compoent
import LoadingScreen from "../component/Loading/LoadingScreen";
import Menu from "../component/Navigation/Menu";
import Hero from "../component/Hero/Hero";
import SectionCompanyWords from "../component/Section/SectionCompanyWords";
import SectionImageTitle from "../component/Section/SectionImageTitle";
import SectionDescription from "../component/Section/SectionDescription";

// Hooks API
import useFetch from "../hooks/useFetch";

// Context
import { MenuProvider } from "../context/Menu";
function Home() {
  const { data, error } = useFetch(
    "https://webster-backend.vercel.app/api/porto"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [animationDone, setAnimationDone] = useState(false); // seluruh animasi telah selesai (termasuk slide pada hlm ini)
  const [porto, setPorto] = useState(false); // apakah data sudah diload ?? -> ksh tau untuk jalankan fungsi animasi slide

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (data) {
        setPorto(true);
        console.log(data);
        console.log(error);
      }
    }, 1600);
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
          onAnimationComplete={() => {
            setAnimationDone(true);
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
        onAnimationComplete={() => {
          setAnimationDone(true);
        }}
        className="absolute top-0 left-0 z-10 bg-custome-green-400 w-full h-screen"
      ></motion.div>

      {/* menu for navigation */}
      {menuOpen && <Menu />}

      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <Hero />
      </MenuProvider>
      <main className="px-web-sm smXL:px-web-md xlX:px-web-lg">
        <SectionCompanyWords />
        <div className="flex flex-col mdXL:flex-row">
          <SectionImageTitle />
          <SectionDescription />
        </div>
      </main>

      {/* <Hero animationDone={animationDone} /> */}

      {/* https://www.youtube.com/watch?v=hkhskSrT5SY */}
      {/* useInView */}
      <div className="w-full h-screen bg-orange-400 grid place-content-center">
        <motion.h1
          className="text-xl font-bold"
          initial={{ marginRight: 400, opacity: 0 }}
          variants={{
            opacity: {
              opacity: 1,
              transition: { duration: 1 },
              marginRight: 0,
            },
          }}
          whileInView={animationDone && "opacity"}
          viewport={{ once: true, amount: "all" }}
        >
          {data.portfolio}
        </motion.h1>
      </div>
    </>
  );
}

export default Home;
