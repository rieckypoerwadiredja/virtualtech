import React, { useEffect, useState } from "react";
// Component
import PortoCard from "../Card/PortoCard";
// Context
import { PortoCardProvider } from "../../context/PortoCardContext";
import { PortosState } from "../../context/PortosContext";
import ErrorPage from "../../pages/ErrorPage";

function SectionPortoCard() {
  const [porto, setPorto] = useState([]);
  const { data, error, loading } = PortosState();

  useEffect(() => {
    if (data) {
      setPorto(data.portfolio);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex flex-col smXL:flex-row gap-5 pb-20">
        <div className="flex flex-col smXL:w-1/2 mt-[10%] gap-5">
          {[...Array(2)].map((porto, index) => (
            <div
              key={index}
              className="w-full h-[400px] bg-slate-300 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex flex-col smXL:w-1/2 gap-5">
          {[...Array(2)].map((porto, index) => (
            <div
              key={index}
              className="w-full h-[400px] bg-slate-300 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || data.error) {
    return (
      <div className="App">
        <ErrorPage
          message={data.message || error.message}
          errorCode={data.code || error.code}
          status={data.status || error.status}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col smXL:flex-row gap-5 pb-20">
      <div className="flex flex-col smXL:w-1/2 mt-[10%] gap-5">
        {porto.map((porto, index) => (
          <PortoCardProvider key={index} value={porto}>
            {porto.id % 2 !== 0 && <PortoCard animation redirect />}
          </PortoCardProvider>
        ))}
      </div>
      <div className="flex flex-col smXL:w-1/2 gap-5">
        {porto.map((porto, index) => (
          <PortoCardProvider key={index} value={porto}>
            {porto.id % 2 === 0 && <PortoCard animation redirect />}
          </PortoCardProvider>
        ))}
      </div>
    </div>
  );
}

export default SectionPortoCard;
