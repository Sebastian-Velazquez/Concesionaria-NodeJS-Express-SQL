const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const productsControllers = require("../controllers/productsControllers.js")
//middlewares
const upload = require("../middlewares/multerMiddleware");//multer
const validations = require("../middlewares/productsRouterSql/validationsMiddleware");

const guestMiddlewares = require("../middlewares/userRouter/guestMiddlewares");//si tengo alguein en session
const authMiddlewares = require("../middlewares/userRouter/authMiddlewares");//si no tengo a nadie en session


//lista de productos
router.get("/list", productsControllers.list);
//detalle de peliculas
router.get("/list/:id", productsControllers.detail);
//viste de crear producto
router.get("/create", authMiddlewares,productsControllers.create);
//Crear Producto
router.post("/create",upload.single("image"),validations, productsControllers.processCreate);
//Vista editar Producto
router.get("/edit/:id", productsControllers.edit);
//Editar producto
router.put("/edit/:id",upload.single("image"),validations, productsControllers.processEdit);
//Eliminar Producto
router.delete("/delete/:id", productsControllers.delete);
//carrito
router.get("/productCart", productsControllers.productCart);
//vista modelos
router.get("/modelos/:id", productsControllers.modelos);

module.exports = router;
