const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllersSql = require("../controllers/usersControllersSql.js")

//lista de productos
router.get("/login", usersControllersSql.login);

module.exports = router;