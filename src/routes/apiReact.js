const express = require("express");
const router = express.Router();


// llamamos a la ruta de controlador
const apiReactController = require("../controllers/apiReactController.js");

router.get("/", apiReactController.index);


module.exports = router;

