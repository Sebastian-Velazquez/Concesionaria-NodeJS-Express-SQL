let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    list:(req, res)=>{
        db.Productos
        .findAll({
            where:{
                delete: 0,
            }, 
            order:[
                ["name", "ASC"]
            ]
        })
        .then(function(productos){
            res.render("./products/productsList",{productos:productos})
        })
        .catch(function(error){
            res.send(error)
        }) 
    },
    detail:(req, res)=>{
        db.
        Productos
            .findByPk(req.params.id,{//paramrtro del body. id porque pusimos asi en el router
                include:[{association: "color"},{association: "modelo"}]})//asociamos las relaciones de tablas
            .then(producto=>{

                if(producto.delete === 0){//validar si esta borrado
                res.render("./products/productsDetail",{producto:producto})
                }else{
                    res.redirect("/")
                }
                
            })
            .catch(function(error){
                res.send(error)
            })
    },
    productCart:(req,res)=>{
        return res.render('./products/productCart')
    },
    modelos:(req,res)=>{//poner en le buscador
        //console.log(req.params.id)
        //res.send("hola " + req.params.id)
        db.Productos.findAll({
            where: {
                delete: 0,
                id_modelo : req.params.id
            },
            order:[
                ["name", "DESC"]
            ],
        }).then(productos=>{
            res.render("./products/productsModel", {productos:productos})
        })
    },
    create:(req,res)=>{
        let pedidoColores = db.Colores.findAll();
        let pedidosModelos = db.Modelos.findAll();
        
        Promise.all([pedidoColores, pedidosModelos])//para poder llamar dos tablas
        .then(function([colors, models]){
            res.render("./products/productsCreate",{
                colors:colors, 
                models:models
            })
        })
        .catch(function(error){
            res.send(error);
        }) 

        //res.render("./products/sql/productsCreate");
    },
    processCreate:(req,res)=>{
        //validacion
        console.log(req.body.anio)
        const resultValidation = validationResult(req);//validacion
        if (resultValidation.errors.length > 0){

            let pedidoColores = db.Colores.findAll();
            let pedidosModelos = db.Modelos.findAll();
            Promise.all([pedidoColores, pedidosModelos])//para poder llamar dos tablas
            .then(function([colors, models]){
                    return res.render("./products/productsCreate",{
                        colors:colors,
                        models:models, 
                        errors: resultValidation.mapped(), 
                        oldData: req.body})
                })
                .catch(function(error){
                    res.send(error);
                })
        }else{
        db.Productos
                .create({
                    name: req.body.name,  
                    price: req.body.price,
                    anio: req.body.anio,
                    image: req.file ? req.file.filename : "default-image.png",
                    description: req.body.description,
                    id_color: req.body.color, 
                    id_modelo: req.body.model,
                    outstanding: req.body.outstanding ? 1 : 0,
                    delete: 0
        })
    res.redirect("list")
        }
    },
    edit:(req, res)=>{
        let pedidoProducto = db.Productos.findByPk(req.params.id);
        let pedidoColores = db.Colores.findAll();
        let pedidosModelos = db.Modelos.findAll();
        
        Promise.all([pedidoColores, pedidosModelos, pedidoProducto])//para poder llamar dos tablas
        .then(function([colors, models, producto]){
            if(producto.delete === 0){
                res.render("./products/productsEdit",{
                    colors:colors, 
                    models:models,
                    producto:producto
                })
            }else{
                res.redirect("/")
            }
        })
        .catch(function(error){
            res.send(error);
        }) 
    },
    processEdit:(req,res)=>{
        //validacion
        const resultValidation = validationResult(req);//validacion
        if (resultValidation.errors.length > 0){

            let pedidoProducto = db.Productos.findByPk(req.params.id);
            let pedidoColores = db.Colores.findAll();
            let pedidosModelos = db.Modelos.findAll();
            
            Promise.all([pedidoColores, pedidosModelos, pedidoProducto])//para poder llamar dos tablas
            .then(function([colors, models, producto]){
                res.render("./products/productsEdit",{
                    colors:colors, 
                    models:models,
                    producto:producto,
                    errors: resultValidation.mapped(), 
                    oldData: req.body
                })
            })
            .catch(function(error){
                res.send(error);
            })
        }else{
        let pedidoProducto = db.Productos.findByPk(req.params.id);
        //console.log(req.body)
        db.Productos
            .update({
                name: req.body.name,  
                price: req.body.price,
                anio: req.body.anio,
                image: req.file ? req.file.filename : pedidoProducto.image,
                description: req.body.description,
                id_color: req.body.color,  
                id_modelo: req.body.model,  
                outstanding: req.body.outstanding ? 1 : 0,
                },
                {where:{id_product: req.params.id}
            })
        res.redirect("/product/list")
        }
    },
    delete:(req, res)=>{
        db.Productos
            .update({
                delete: 1
                },
                {
                    where:{
                        id_product: req.params.id
                }
            })
            res.redirect("/product/list")
    }
}

module.exports = controlador;