module.exports = {
  serverError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      error: true,
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while sending data. Please try again later",
      timestamp: new Date(),
    });
  },
};
