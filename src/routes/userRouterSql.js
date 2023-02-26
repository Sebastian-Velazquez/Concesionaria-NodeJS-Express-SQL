const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllersSql = require("../controllers/usersControllersSql.js")

//regitro de usuario
router.get("/register", usersControllersSql.register);
//login de usuario
router.get("/login", usersControllersSql.login);
module.exports = router;