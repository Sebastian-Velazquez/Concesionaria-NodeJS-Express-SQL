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
                return res.status(200).json({
                    total: usarios.length,
                    data: usarios,
                    status: 200
                })
            })
    },
    listproducts: (req, res) => {
        db.Productos
            .findAll()
            .then(productos=>{
                return res.status(200).json({
                    total: productos.length,
                    data: productos,
                    status: 200
                })
            })
    }
}

module.exports = controlador;