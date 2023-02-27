let db = require("../database/models");

const controlador ={
    register:(req, res)=>{
        res.render("./users/sql/userRegister")
    },
    processRegister:(req, res)=>{
        db.Usuarios
            .create({
                first_name: req.body.firstName,  
                last_name: req.body.lastName,
                birt_date: req.body.date,
                email: req.body.email,
                password: req.body.password, 
                image: "avatar.jpg",
                id_category: 1
            })
        res.send("registrado")
    },
    login:(req, res)=>{
        res.render("./users/sql/userLogin")
    },
    processLogin:(req, res)=>{
        res.send("Estas en el proceso de login")
    }
}
module.exports = controlador;