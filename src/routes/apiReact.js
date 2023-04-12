const express = require("express");
const router = express.Router();


// llamamos a la ruta de controlador
const apiReactController = require("../controllers/apiReactController.js");

//router.get("/", apiReactController.index);
router.get("/users", apiReactController.listUsers);
router.get("/products", apiReactController.listproducts);


module.exports = router;

