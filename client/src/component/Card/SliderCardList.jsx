import React from "react";
import PropTypes from "prop-types";

// Component
import SliderCard from "./SliderCard";

function SliderCardList({ data }) {
  return (
    <div className="flex flex-shrink-0 flex-grow-0 basis-0 w-auto text-white">
      {data.map((slide, index) => {
        if (index === 0)
          return <SliderCard key={slide.id} firstIndex data={slide} />;
        return <SliderCard key={slide.id} data={slide} />;
      })}
    </div>
  );
}

SliderCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SliderCardList;
