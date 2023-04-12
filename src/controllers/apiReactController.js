let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    /* index:(req, res)=>{
        res.send("hola")
    }, */
    listUsers: (req, res) => {
        db.Usuarios
            .findAll()
            .then(usarios=>{
                return res.json(usarios)
            })
    },
    listproducts: (req, res) => {
        db.Productos
            .findAll()
            .then(usarios=>{
                return res.json(usarios)
            })
    }
}

module.exports = controlador;