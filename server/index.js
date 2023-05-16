const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    credentials: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
