import React from "react";

// Component
import SliderCardList from "../Card/SliderCardList";

function Slider({ data }) {
  return (
    <div className="w-full overflow-x-auto pb-10">
      <SliderCardList data={data} />
    </div>
  );
}

export default Slider;
