const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersController = require("../controllers/usersControllers.js")

//Middleware
const upload = require("../middlewares/userRouter/multerMiddlewaresUser");
const validationsRegister = require("../middlewares/userRouter/validationsRegisterMiddlewares");

// procesa pedido de get. Ahora usamos router en MVC. son rutas 
router.get("/login", usersController.login);
router.post("/login", usersController.processLogin)
/* rutas de registro*/
router.get("/register", usersController.register);
router.post("/register", upload.single("image"), validationsRegister, usersController.processRegister);
/* ruta perfil de usuario */
router.get("/userProfile", usersController.userProfile);
router.post("/userProfile", usersController.userProfile);


module.exports = router;