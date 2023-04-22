const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersControllers = require("../controllers/usersControllers.js")
//middlewares validar registro
const validationsRegistro = require("../middlewares/userRouter/validationsRegisterMiddlewares");
const upload = require("../middlewares/userRouter/multerMiddlewaresUser");//multer
const guestMiddlewares = require("../middlewares/userRouter/guestMiddlewares");//si tengo alguein en session
const authMiddlewares = require("../middlewares/userRouter/authMiddlewares");//si no tengo a nadie en session

//regitro de usuario
router.get("/register", guestMiddlewares,usersControllers.register);
router.post("/register", upload.single("image"),validationsRegistro, usersControllers.processRegister);
//login de usuario
router.get("/login",  guestMiddlewares, usersControllers.login);
router.post("/login", usersControllers.processLogin);
//Vista Usuario
router.get("/userProfile", authMiddlewares, usersControllers.userProfile);
//Salir de session
router.get("/logout/", usersControllers.logout);
module.exports = router;