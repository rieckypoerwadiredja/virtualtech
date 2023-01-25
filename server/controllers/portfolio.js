// MODEL
const {
  getPortfolio,
} = require('../model/getPortfolio');

module.exports = {
  getPorto: async (req, res) => {
    try {
      const portfolio = await getPortfolio();
      res.setHeader('Content-Type', 'application/json');
      res.json({
        portfolio,
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: true, message: 'Terjadi kesalahan dalam pengambilan data' });
    }
  },
};
