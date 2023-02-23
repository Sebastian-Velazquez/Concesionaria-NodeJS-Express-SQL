let db = require("../database/models");

const controlador ={
    list:(req, res)=>{
        db.Productos
        .findAll()
        .then(function(productos){
            res.render("./products/sql/productsList",{productos:productos})
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
                res.render("./products/sql/productsDetail",{producto:producto})
            })
            .catch(function(error){
                res.send(error)
            })
    },
    create:(req,res)=>{
        let pedidoColores = db.Colores.findAll();
        let pedidosModelos = db.Modelos.findAll();
        
        Promise.all([pedidoColores, pedidosModelos])//para poder llamar dos tablas
        .then(function([colors, models]){
            res.render("./products/sql/productsCreate",{
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
        
        db.Productos
                .create({
                    name: req.body.name,  
                    price: req.body.price,
                    anio: req.body.anio,
                    description: req.body.description,
                    id_color: req.body.color, 
                    id_modelo: req.body.models 
        })
    res.redirect("list")
    },
    edit:(req, res)=>{
        let pedidoProducto = db.Productos.findByPk(req.params.id);
        let pedidoColores = db.Colores.findAll();
        let pedidosModelos = db.Modelos.findAll();
        
        Promise.all([pedidoColores, pedidosModelos, pedidoProducto])//para poder llamar dos tablas
        .then(function([colors, models, producto]){
            res.render("./products/sql/productsEdit",{
                colors:colors, 
                models:models,
                producto:producto
            })
        })
        .catch(function(error){
            res.send(error);
        }) 
    },
    processEdit:(req,res)=>{
        db.Productos
            .update({
                name: req.body.name,  
                price: req.body.price,
                anio: req.body.anio,
                description: req.body.description,
                id_color: req.body.color,  
                id_modelo: req.body.models  
                },{
                    where:{
                        id_product: req.params.id
                }
            })
        res.redirect("/product/list/")
    },
    delete:(req, res)=>{
        db.Productos
            .destroy({
                where:{
                    id_product: req.params.id
                }
            })
            res.redirect("/product/list/")
    }
}

module.exports = controlador;