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
// Controllers
const notFound = require("./error/notFound");
const serverError = require("./error/serverError");

// Router
const api = require("./routes/routes");

app.use("/api", api);

app.use(serverError.serverError);
app.use(notFound.notFound);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
