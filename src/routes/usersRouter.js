const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersController = require("../controllers/usersControllers.js")

//Middleware
const upload = require("../middlewares/userRouter/multerMiddlewaresUser");
const validationsRegister = require("../middlewares/userRouter/validationsRegisterMiddlewares");

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
router.get("/login", usersController.login);
router.post("/login", usersController.processLogin)
/* router.post("/login", user) */
router.get("/register", usersController.register);
router.post("/register", upload.single("image"), validationsRegister, usersController.processRegister);


<<<<<<< HEAD





/* router.get("/ofertas", homeController.oferta); */

=======
>>>>>>> 36416ddea631031edd89a3ec1dae00c54d39f865
module.exports = router;