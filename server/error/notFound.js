module.exports = {
  notFound: (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.json({
      error: true,
      code: 404,
      status: "Not Found",
      message: "The requested resource was not found on the server.",
      timestamp: new Date(),
    });
    res.status(404);
  },
};
