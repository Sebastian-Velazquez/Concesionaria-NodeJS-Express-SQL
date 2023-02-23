const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const productsControllersSql = require("../controllers/productsControllersSql.js")
//middlewares
const upload = require("../middlewares/multerMiddleware");//multer

//lista de productos
router.get("/list", productsControllersSql.list);
//detalle de peliculas
router.get("/list/:id", productsControllersSql.detail);
//viste de crear producto
router.get("/create", productsControllersSql.create);
//Crear Producto
router.post("/create",upload.single("image"), productsControllersSql.processCreate);
//Vista editar Producto
router.get("/edit/:id", productsControllersSql.edit);
//Editar producto
router.put("/edit/:id", productsControllersSql.processEdit);
//Eliminar Producto
router.delete("/delete/:id", productsControllersSql.delete);
module.exports = router;
