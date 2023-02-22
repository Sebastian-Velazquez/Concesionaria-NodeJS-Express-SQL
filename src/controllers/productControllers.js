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
    }
}

module.exports = controlador;