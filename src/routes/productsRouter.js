
//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();
const multer = require("multer")
// llamamos a la ruta de controlador
const productsControllers = require("../controllers/productsControllers.js")


//devolver o mandar un producto a detalle de producto
router.get("/detail/:id", productsControllers.productDetail);

//Lista de todos los productos
router.get("/list", productsControllers.list);

//********************GRUD*********************/
//CREAR
//EDITAR
router.get("/edit/:id/", productsControllers.edit);
/* router.put("/edit/:id/", productsControllers.processEdit); */
//EMILINAR


// procesa pedido de get. Ahora usamos router en MVC. son tutas 
router.get("/productCart", productsControllers.productCart);
//router.get("/register", homeController.register);
router.get("/creationPrduct", productsControllers.creationPrduct);
/* router.get("/editProduct", productsControllers.editProduct); */
//router.get("/listProduct", productsControllers.listProduct);

/* router.get("/ofertas", homeController.oferta); */

module.exports = router;