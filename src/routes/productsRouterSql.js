const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const productsControllersSql = require("../controllers/productsControllersSql.js")

//lista de productos
router.get("/list", productsControllersSql.list);
//detalle de peliculas
router.get("/list/:id", productsControllersSql.detail);
//viste de crear producto
router.get("/create", productsControllersSql.create);

module.exports = router;
