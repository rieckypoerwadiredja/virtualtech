import React from "react";
import PropTypes from "prop-types";
// Component
import PortoCard from "../Card/PortoCard";
// Context
import { PortoCardProvider } from "../../context/PortoCardContext";

function SectionPortoCard({ porto }) {
  return (
    <div className="flex flex-col smXL:flex-row gap-5 pb-20">
      <div className="flex flex-col smXL:w-1/2 mt-[20%] gap-5">
        {porto.map((porto, index) => (
          <PortoCardProvider key={index} value={porto}>
            {porto.id % 2 !== 0 && <PortoCard />}
          </PortoCardProvider>
        ))}
      </div>
      <div className="flex flex-col smXL:w-1/2 gap-5">
        {porto.map((porto, index) => (
          <PortoCardProvider key={index} value={porto}>
            {porto.id % 2 === 0 && <PortoCard />}
          </PortoCardProvider>
        ))}
      </div>
    </div>
  );
}

SectionPortoCard.propTypes = {
  porto: PropTypes.object.isRequired,
};

export default SectionPortoCard;
