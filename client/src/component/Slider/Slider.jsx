import React from "react";

// Component
import SliderCardList from "../Card/SliderCardList";

function Slider() {
  const data = [
    {
      id: 1,
      1: 1,
    },
    {
      id: 2,
      1: 1,
    },
    {
      id: 3,
      1: 1,
    },
  ];
  return (
    <div className="w-full overflow-hidden pb-10">
      <SliderCardList data={data} />
    </div>
  );
}

export default Slider;
