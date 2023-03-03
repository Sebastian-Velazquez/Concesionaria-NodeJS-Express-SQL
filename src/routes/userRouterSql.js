const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllersSql = require("../controllers/usersControllersSql.js")

//regitro de usuario
router.get("/register", usersControllersSql.register);
router.post("/register", usersControllersSql.processRegister);
//login de usuario
router.get("/login", usersControllersSql.login);
router.post("/login", usersControllersSql.processLogin);

module.exports = router;