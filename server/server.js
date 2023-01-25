const express = require('express');

const app = express();

// MODEL
const {
  getPortfolio,
} = require('./model/getPortfolio');

app.get('/api/name', async (req, res) => {
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
});

app.use((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({
    error: true,
    message: 'not found',
  });
  res.status(404);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
