let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    /* index:(req, res)=>{
        res.send("hola")
    }, */
    listUsers: async (req, res)=>{
        try{
            const users = await  db.Usuarios.findAll()
            //delete users.password
            users.map( dato => delete dato.dataValues.password)//Por seguridad
            users.map( dato => dato.dataValues.image ="http://localhost:3001/img/avatar/" + dato.dataValues.image)//Por seguridad
            console.log(users)
            res.json({
                count: users.length,
                users: users,
                status: 200
            })
        } catch (error){
            console.log(error);
            res.status(500).send('Error al obtener los usuarios');
        }


    },






    AlistUsers: (req, res) => {
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