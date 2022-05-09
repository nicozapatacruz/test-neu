const express = require("express");
const router = express.Router();
const numerosController = require("../controllers/numerosController");

router.get("/", numerosController.list);
router.get("/search", numerosController.search);
router.get("/details/:id", numerosController.detail);
router.get("/create", numerosController.create);
router.get("/error", numerosController.error);

module.exports = router;
