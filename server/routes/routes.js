const express = require("express");
const router = express.Router();

// Controller
const portofolio = require("../controllers/portfolio");
const notFound = require("../error/notFound");
const serverError = require("../error/serverError");

router.get("/portfolios", portofolio.getPortos);
router.get("/portfolios/:creator/:id/:title", portofolio.getPorto);

router.use(serverError.serverError);
router.use(notFound.notFound);

module.exports = router;
