const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllersSql = require("../controllers/usersControllersSql.js")

//lista de productos
router.get("/list", usersControllersSql.list);

module.exports = router;