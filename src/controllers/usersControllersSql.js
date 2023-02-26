let db = require("../database/models");

const controlador ={
    register:(req, res)=>{
        res.send("Estas en el registro de usario")
    },
    login:(req, res)=>{
        res.send("Estas en el login de registro")
    }
}
module.exports = controlador;