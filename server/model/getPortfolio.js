const portofolio = [
  {
    id: 1,
    type: "Landscapes",
    title:
      "A collection of the most interesting photos and galleries taken during the flights.",
    creator: {
      name: "Andreas Moris",
      desc: "Blog Director",
      image: "./drone.jpg",
      alt: "drone",
    },
    cardImage: "",
    background: null,
  },
  {
    id: 2,
    type: "Tutorials",
    title:
      "Top 10 Best equipment for beginners. Selection and advice when buying drone.",
    creator: {
      name: "John Moris",
      desc: "We created diagrams and analyzes",
      image: "./drone.jpg",
      alt: "drone",
    },
    cardImage: null,
    background: "",
  },
];

// eslint-disable-next-line arrow-body-style
const getPortfolio = async () => {
  return portofolio;
};

module.exports = {
  getPortfolio,
};
