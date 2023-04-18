const express = require("express");
const router = express.Router();

//middlewares
const corsValidation = require("../middlewares/api/corsValidacion");//para que la api sea privada y vos elijas 

// llamamos a la ruta de controlador
const apiReactController = require("../controllers/apiReactController.js");

//router.get("/", apiReactController.index);
router.get("/users", /* corsValidation, */ apiReactController.listUsers);//corsValidation si lo sacas se vuelve api publica
router.get("/users/:id", apiReactController.detailUsers);
router.get("/products", /* corsValidation, */apiReactController.listproducts);
router.get("/products/:id", /* corsValidation, */apiReactController.detailproducts);


module.exports = router;




























/* const cors = require('cors')

//para qe la api se consumida por las web que decidamos. Sacado de https://www.npmjs.com/package/cors
//Seguridad de quien puede usar esta api. No publica 
let whitelist = ['http://localhost:3000']
let corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
} */
