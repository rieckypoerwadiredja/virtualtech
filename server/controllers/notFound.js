module.exports = {
  notFound: (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
      error: true,
      message: 'not found',
    });
    res.status(404);
  },
};
