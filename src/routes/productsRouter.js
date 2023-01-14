
//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();
const multer = require("multer")
// llamamos a la ruta de controlador
const productsControllers = require("../controllers/productsControllers.js")

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
/* router.get("/list", mainController.list); */ //EJEMPLO DE PRAMETRO COMPARTIDO

// procesa pedido de get. Ahora usamos router en MVC. son tutas 
router.get("/productCart", productsControllers.productCart);
router.get("/productDetail", productsControllers.productDetail);
//router.get("/register", homeController.register);
router.get("/creationPrduct", productsControllers.creationPrduct);
router.get("/productEdit", productsControllers.productEdit);
router.get("/listProduct", productsControllers.listProduct);

/* router.get("/ofertas", homeController.oferta); */

module.exports = router;