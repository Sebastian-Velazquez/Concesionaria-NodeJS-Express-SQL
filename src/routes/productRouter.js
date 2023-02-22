const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const productControllers = require("../controllers/productControllers.js")

/*****SQL */
router.get("/list", productControllers.list);
router.get("/list/:id", productControllers.detail);

module.exports = router;
