let db = require("../database/models");

const controlador ={
    register:(req, res)=>{
        res.render("./users/sql/userRegister")
    },
    processRegister:(req, res)=>{
        res.send("Estas en el proceso de usario creado")
    },
    login:(req, res)=>{
        res.render("./users/sql/userLogin")
    },
    processLogin:(req, res)=>{
        res.send("Estas en el proceso de login")
    }
}
module.exports = controlador;