//va siempre
const express = require("express");
const router = express.Router();
//const multer = require("multer")
//const path = require("path");//para multer
const { productCart } = require("../controllers/productsControllers.js");

// llamamos a la ruta de controlador
const productsControllers = require("../controllers/productsControllers.js")

//Middleware
const upload = require("../middlewares/multerMiddleware");
const validations = require("../middlewares/productsRouter/validationsMiddleware");
const validationsEdit = require("../middlewares/productsRouter/validationsMiddlewareProductEdit");
//devolver o mandar un producto a detalle de producto
router.get("/detail/:id", productsControllers.productDetail);
//Lista de todos los productos
router.get("/list", productsControllers.list);

//********************GRUD*********************/
//CREAR
router.get("/create", productsControllers.create);
router.post("/create", upload.single("image"),validations,  productsControllers.processCreate);
//EDITAR
router.get("/edit/:id/", productsControllers.edit);
router.put("/edit/:id/", upload.single("image"),validationsEdit, productsControllers.processEdit);
//EMILINAR
router.delete("/delete/:id/", productsControllers.delete);
//********************GRUD*********************/
router.get("/productCart", productsControllers.productCart);
/* router.get("/ofertas", homeController.oferta); */

module.exports = router;