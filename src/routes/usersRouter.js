
//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const usersController = require("../controllers/usersControllers.js")

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
/* router.get("/list", mainController.list); */ //EJEMPLO DE PRAMETRO COMPARTIDO

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
//router.get("/", homeController.index);
router.get("/login", usersController.login);
router.post("/login", usersController.processLogin)
/* router.post("/login", user) */
router.get("/register", usersController.register);
router.post("/register", usersController.processRegister);






/* router.get("/ofertas", homeController.oferta); */

module.exports = router;