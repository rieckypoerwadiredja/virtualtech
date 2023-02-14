import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function LoadingScreen({ getdata, onLoadingAnimationDone }) {
  const [loadingAnim, setLoadingAnim] = useState(false);

  useEffect(() => {
    // console.log(loadingAnim)
    if (loadingAnim) {
      onLoadingAnimationDone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingAnim]);

  return (
    <div className="relative w-full h-screen grid place-items-center bg-blackScreen-800">
      <motion.div
        data-testid="slide"
        initial={{ width: 0 }}
        variants={{
          slide: {
            width: ["0%", "100%"],
            transition: { duration: 0.8, delay: 0.5 },
          },
        }}
        animate={getdata && "slide"}
        onAnimationComplete={() => setLoadingAnim(true)}
        className="absolute top-0 left-0 z-10 bg-custome-green-400 w-full h-screen"
      ></motion.div>
      <motion.div
        style={{ transformOrigin: "left" }}
        initial={{ opacity: 0, paddingRight: 0 }}
        animate={{ opacity: 1, paddingRight: "10%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative bg-blackScreen-400 overflow-visible"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-white text-5xl font-normal py-2"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
