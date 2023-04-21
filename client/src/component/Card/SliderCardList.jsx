import React from "react";
import PropTypes from "prop-types";

// Component
import SliderCard from "./SliderCard";
import { SliderCardProvider } from "../../context/SliderCardContext";

function SliderCardList({ data }) {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 basis-0 w-auto text-white">
      {data.map((slide, index) => {
        return (
          <SliderCardProvider key={slide.id} value={slide}>
            <SliderCard index={index} animation />
          </SliderCardProvider>
        );
      })}
    </div>
  );
}

SliderCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SliderCardList;
