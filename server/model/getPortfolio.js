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
    background:
      "https://images.unsplash.com/photo-1431036101494-66a36de47def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
  },
];

// eslint-disable-next-line arrow-body-style
const getPortfolio = async () => {
  return portofolio;
};

module.exports = {
  getPortfolio,
};
