const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const productsControllersSql = require("../controllers/productsControllersSql.js")

/*****SQL */
router.get("/list", productsControllersSql.list);
router.get("/list/:id", productsControllersSql.detail);

module.exports = router;
