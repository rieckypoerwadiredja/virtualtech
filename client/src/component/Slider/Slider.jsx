import React from "react";

// Component
import SliderCardList from "../Card/SliderCardList";

function Slider() {
  const data = [
    {
      id: 1,
      image: {
        src: "https://images.unsplash.com/photo-1523346679608-dbbfe6c549d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDd8fGRyb25lfGVufDB8fHx8MTY1MTMyMTExOQ&ixlib=rb-1.2.1&q=80&w=1080",
        alt: "Remote Drone",
      },
      heading: "Experienced crew",
      desc: "Our specialists will take care of your order, check and talk to you if you have any questions when taking pictures of beautiful landscapes.",
      link: {
        text: "About us",
        url: "/aboutus",
      },
    },
    {
      id: 2,
      image: {
        src: "https://images.unsplash.com/photo-1523346679608-dbbfe6c549d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDd8fGRyb25lfGVufDB8fHx8MTY1MTMyMTExOQ&ixlib=rb-1.2.1&q=80&w=1080",
        alt: "Remote Drone",
      },
      heading: "Experienced crew",
      desc: "Our specialists will take care of your order, check and talk to you if you have any questions when taking pictures of beautiful landscapes.",
      link: {
        text: "About us",
        url: "/aboutus",
      },
    },
    {
      id: 3,
      image: {
        src: "https://images.unsplash.com/photo-1523346679608-dbbfe6c549d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDd8fGRyb25lfGVufDB8fHx8MTY1MTMyMTExOQ&ixlib=rb-1.2.1&q=80&w=1080",
        alt: "Remote Drone",
      },
      heading: "Experienced crew",
      desc: "Our specialists will take care of your order, check and talk to you if you have any questions when taking pictures of beautiful landscapes.",
      link: {
        text: "About us",
        url: "/aboutus",
      },
    },
  ];
  return (
    <div className="w-full overflow-x-auto pb-10">
      <SliderCardList data={data} />
    </div>
  );
}

export default Slider;
