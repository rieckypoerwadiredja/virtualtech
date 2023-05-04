import React, { createContext, useContext } from "react";
// Data
import jsonData from "../data/data.json";
const SliderContext = createContext();

function SliderProvider({ children }) {
  return (
    <SliderContext.Provider value={jsonData.slide}>
      {children}
    </SliderContext.Provider>
  );
}

export const SliderState = () => {
  return useContext(SliderContext);
};

export default SliderProvider;
