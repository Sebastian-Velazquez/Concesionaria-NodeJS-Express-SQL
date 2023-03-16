const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersController = require("../controllers/usersControllers.js")

//Middleware
const upload = require("../middlewares/userRouter/multerMiddlewaresUser");
const validationsRegister = require("../middlewares/userRouter/validationsRegisterMiddlewares");

const guestMiddlewares = require("../middlewares/userRouter/guestMiddlewares");//si tengo alguein en session
const authMiddlewares = require("../middlewares/userRouter/authMiddlewares");//si no tengo a nadie en session

// procesa pedido de get. Ahora usamos router en MVC. son rutas 
router.get("/login",guestMiddlewares, usersController.login);
router.post("/login", usersController.processLogin)
/* rutas de registro*/
router.get("/register",guestMiddlewares, usersController.register);
router.post("/register", upload.single("image"), validationsRegister, usersController.processRegister);
/* ruta perfil de usuario */
router.get("/userProfile",authMiddlewares, usersController.userProfile);
//router.post("/profile", usersController.userProfile);
//para salir del login.. crerrar ceunta
router.get("/logout/", usersController.logout);


module.exports = router;