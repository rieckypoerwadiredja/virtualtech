import React, { useContext } from "react";

// Component
import SliderCardList from "../Card/SliderCardList";
import MainContext from "../../context/MainContext";

function Slider() {
  const { slide } = useContext(MainContext);
  return (
    <div className="w-full overflow-x-auto pb-10">
      <SliderCardList data={slide} />
    </div>
  );
}

export default Slider;
