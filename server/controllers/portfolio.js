// MODEL
const { getPortfolios } = require("../model/getPortfolios");

module.exports = {
  getPorto: async (req, res, next) => {
    try {
      const portfolio = await getPortfolios();
      res.setHeader("Content-Type", "application/json");
      res.json({
        portfolio,
      });
    } catch (err) {
      next();
    }
  },
};
