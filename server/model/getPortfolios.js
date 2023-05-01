const portfolios = require("../database/portfolio");

// eslint-disable-next-line arrow-body-style
const getPortfolios = async () => {
  return portfolios;
};

module.exports = {
  getPortfolios,
};
