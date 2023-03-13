const express = require("express");
const router = express.Router();

// Controller
const portofolio = require("../controllers/portfolio");
const notFound = require("../controllers/notFound");

router.get("/porto", portofolio.getPorto);

router.use(notFound.notFound);

module.exports = router;
