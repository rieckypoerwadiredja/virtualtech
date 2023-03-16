// MODEL
const { getPortfolio } = require("../model/getPortfolio");

module.exports = {
  getPorto: async (req, res, next) => {
    try {
      const portfolio = await getPortfolio();
      res.setHeader("Content-Type", "application/json");
      res.json({
        portfolio,
      });
    } catch (err) {
      next();
    }
  },
};
