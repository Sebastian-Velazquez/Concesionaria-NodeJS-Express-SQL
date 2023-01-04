
//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const homeController = require("../controllers/homeController.js")

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
/* router.get("/list", mainController.list); */ //EJEMPLO DE PRAMETRO COMPARTIDO

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
router.get("/", homeController.index);
router.get("/login", homeController.login);
router.get("/productCart", homeController.productCart);
router.get("/productDetail", homeController.productDetail);
router.get("/register", homeController.register);

/* router.get("/ofertas", homeController.oferta); */

module.exports = router;