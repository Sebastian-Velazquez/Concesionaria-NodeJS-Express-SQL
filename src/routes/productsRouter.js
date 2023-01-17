//va siempre
const express = require("express");
const router = express.Router();
const multer = require("multer")
const path = require("path");//para multer

//***********Multer****************
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"public/img/products") //se pone la ruta como si estariamos en la raiz del proyecto.
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})
//***********FinMulter****************

// llamamos a la ruta de controlador
const productsControllers = require("../controllers/productsControllers.js")


//devolver o mandar un producto a detalle de producto
router.get("/detail/:id", productsControllers.productDetail);
//Lista de todos los productos
router.get("/list", productsControllers.list);
//********************GRUD*********************/
//CREAR
router.get("/create", productsControllers.create);
router.post("/create", upload.single("productImage"), productsControllers.processCreate);
//EDITAR
router.get("/edit/:id/", productsControllers.edit);
router.put("/edit/:id/", upload.single("productImage"), productsControllers.processEdit);
//EMILINAR
router.delete("/delete/:id/", productsControllers.delete);
//********************GRUD*********************/


router.get("/productCart", productsControllers.productCart);
/* router.get("/ofertas", homeController.oferta); */

module.exports = router;