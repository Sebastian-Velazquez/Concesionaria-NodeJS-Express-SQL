let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    /* index:(req, res)=>{
        res.send("hola")
    }, */
    listUsers: async (req, res)=>{
        try{
            const users = await  db.Usuarios.findAll();
            let apiUsers =[]
            for(let i=0; i < users.length; i++) {
                let nuevoUsers = {
                    id: users[i].id_user,
                    name:users[i].first_name + " " + users[i].last_name,
                    email:users[i].email,
                    detail: "http://localhost:3001/api/users/"+users[i].id_user
                }
                apiUsers.push(nuevoUsers)
            }
            res.json({
                count: apiUsers.length,
                users: apiUsers,
                status: 200
            })
        } catch (error){
            console.log(error);
            res.status(500).send('Error al obtener los usuarios');
        }
    },
    detailUsers: async(req,res)=>{
        const users = await  db.Usuarios.findAll( {
                where:{
                id_user: req.params.id,
                }
            })
            console.log(users)
        let apiUser = [];
            let nuevoUser = {
                id: users[0].id_user,
                name:users[0].first_name + " " + users[0].last_name,
                email:users[0].email,                
            }
                apiUser.push(nuevoUser)
        res.json({
            count: apiUser.length,
            users: apiUser,
            status: 200
        })
    },
    listproducts: async (req, res) => {
        try{
        const products = await  db.Productos.findAll();
        const productsSedan = await  db.Productos.findAll({
                where:{
                    id_modelo: 1
                }
            });
        //products.map( dato => dato.dataValues.image ="http://localhost:3001/img/products/" + dato.dataValues.image);
        res.json({
            count: products.length,
            countByCategory: "Sedan" + productsSedan.length,
            users: products,
            status: 200
        })
    } catch (error){
        console.log(error);
        res.status(500).send('Error al obtener los productos');
    }
    },




/*     listproducts: (req, res) => {
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
    } */
}

module.exports = controlador;










/* 
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
    }, */