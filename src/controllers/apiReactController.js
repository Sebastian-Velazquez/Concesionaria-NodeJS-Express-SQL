let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    /* index:(req, res)=>{
        res.send("hola")
    }, */
    listUsers: (req, res) => {
        db.Usuarios
            .findAll()
            .then(usuarios=>{
                usuarios.map( dato => dato.password = null)//Por seguridad
                if (usuarios.length > 0){
                    return res.status(200).json({
                        total: usuarios.length,
                        data: usuarios,
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
                productos.map( dato => dato.password = null)//Por seguridad
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