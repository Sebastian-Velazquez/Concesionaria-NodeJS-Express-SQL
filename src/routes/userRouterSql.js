const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllersSql = require("../controllers/usersControllersSql.js")

const guestMiddlewares = require("../middlewares/userRouter/guestMiddlewares");//si tengo alguein en session
const authMiddlewares = require("../middlewares/userRouter/authMiddlewares");//si no tengo a nadie en session

//regitro de usuario
router.get("/register", guestMiddlewares,usersControllersSql.register);
router.post("/register", usersControllersSql.processRegister);
//login de usuario
router.get("/login",  guestMiddlewares, usersControllersSql.login);
router.post("/login", usersControllersSql.processLogin);
//Vista Usuario
router.get("/userProfile", authMiddlewares, usersControllersSql.userProfile);
//Salir de session
router.get("/logout/", usersControllersSql.logout);
module.exports = router;