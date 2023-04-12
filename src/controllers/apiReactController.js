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
                if (usarios.length > 0){
                    return res.status(200).json({
                        total: usarios.length,
                        data: usarios,
                        status: 200
                    })

                }else{
                    return res.status(200).json("No hay usuarios para mostrar")
                }
            })
    },
    listproducts: (req, res) => {
        db.Productos
            .findAll()
            .then(productos=>{
                if (productos.length > 0){
                    return res.status(200).json({
                        total: productos.length,
                        data: productos,
                        status: 200
                    })
                }else{
                    return res.status(200).json("No hay productos para mostrar")
                }
                
            })
    }
}

module.exports = controlador;