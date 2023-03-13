const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET",
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    credentials: true,
  })
);

// Router
const dataRouter = require("./routes/routes");

app.use("/api", dataRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
