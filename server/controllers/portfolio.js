// MODEL
const { getPortfolios } = require("../model/getPortfolios");

module.exports = {
  getPortos: async (req, res, next) => {
    try {
      const portfolio = await getPortfolios();
      res.setHeader("Content-Type", "application/json");
      res.json({
        portfolio,
      });
    } catch (err) {
      next(err);
    }
  },
  getPorto: async (req, res, next) => {
    try {
      const porto = await getPortfolios();
      const { creator, id, title } = req.params;

      res.setHeader("Content-Type", "application/json");

      const portfolio = porto.filter((porto) => {
        const searchId = porto.id === parseInt(id.replace("%", " "));

        const searchCreator =
          porto.creator.name.toLowerCase() ===
          creator.replace("%", " ").toLowerCase();

        const searchTitle =
          porto.title.toLowerCase() === title.replace("%", " ").toLowerCase();

        console.log(searchId, searchCreator, searchTitle);

        if ((searchId, searchCreator, searchTitle)) return porto;
      });
      if (portfolio.length < 1) return next();
      res.json({
        portfolio,
      });
    } catch (err) {
      next(err);
    }
  },
};
