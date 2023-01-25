import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Compoent
import LoadingScreen from "../component/Loading/LoadingScreen";

// Hooks API
import useFetch from "../hooks/useFetch";

function Home() {
  const { data, error } = useFetch("/api/name");
  const [isLoading, setIsLoading] = useState(true);
  const [animationDone, setAnimationDone] = useState(false); // seluruh animasi telah selesai (termasuk slide pada hlm ini)
  const [porto, setPorto] = useState(false); // apakah data sudah diload ?? -> ksh tau untuk jalankan fungsi animasi slide

  useEffect(()=>{
      setTimeout(() => {  
        if(data) {
          setPorto(true)
        } 
      }, 1600);
  },[data])

  function onLoadingAnimationDone(loadingStatus) {
    if(loadingStatus) {
      setIsLoading(false)
    }
  }

  // const loading = true
  if(isLoading) {
    return (
      <div className="App">
        <LoadingScreen getdata={porto} onLoadingAnimationDone={onLoadingAnimationDone}/>
      </div>
    )
  }
  if(error || data.error) {
    return (
      <div className="App">
        <motion.div 
            initial={{ width: "100vw"}}
            animate={{
              width:["100vw","0vw"],
              transition:{duration:0.8, delay:0.5}
            }}
            onAnimationComplete={() => {
              setAnimationDone(true)
            }}
            className="absolute top-0 left-0 z-10 bg-custome-green-400 w-full h-screen">                
            </motion.div>
        ERROR BREEE YG SABARR YEEE
        {data.message}
      </div>
    )
  }
  return(
    <>
      <div>
        <motion.div 
            initial={{ width: "100vw"}}
            animate={{
              width:["100vw","0vw"],
              transition:{duration:0.8, delay:0.5}
            }}
            onAnimationComplete={() => {
              setAnimationDone(true)
            }}
            className="absolute top-0 left-0 z-10 bg-custome-green-400 w-full h-screen">                
            </motion.div>
        <motion.h1
          initial={{ opacity: 0}}
          variants={{
            opacity:{
              opacity:1,
              transition:{duration:1}
            }
          }}
          animate={animationDone && "opacity"}        
        >{data.portfolio}
        </motion.h1>
      </div>
    </>
  )
}

export default Home;