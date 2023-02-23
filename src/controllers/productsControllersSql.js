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
        res.send("crear producto")
    }
}

module.exports = controlador;