let db = require("../database/models");

const controlador ={
    list:(req, res)=>{
        db.Productos
        .findAll()
        .then(function(productos){
            res.render("./products/productsList",{productos:productos})
        })
        .catch(function(error){
            res.send(error);
        }) 
    },
    detail:(req, res)=>{
        db.
        Productos
            .findByPk(req.params.id,{//paramrtro del body. id porque pusimos asi en el router
                include:[{association: "color"},{association: "modelo"}]})//asociamos las relaciones de tablas
            .then(producto=>{
                res.render("./products/productsDetail",{producto:producto})
            })
            .catch(function(error){
                res.send(error);
            })
    }
}

module.exports = controlador;