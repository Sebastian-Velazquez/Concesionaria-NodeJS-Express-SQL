let db = require("../database/models");
const bcryptjs = require("bcryptjs");//requiere bcrypt para las password
const {validationResult} = require('express-validator');

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
                password: bcryptjs.hashSync(req.body.password, 10), 
                image: "avatar.jpg",
                id_category: 1
            })
        res.render('./users/sql/userLogin')
    },
    login:(req, res)=>{
        res.render("./users/sql/userLogin")
    },
    processLogin:(req, res)=>{
        db.Usuarios.findOne({ //dindOne: busca y hay un dato que sea igual al madado por el body
            where:{
                email: req.body.email  //
            }
        }).then(userToLogin =>{
            if(userToLogin){
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if(isOkThePassword){
                    delete userToLogin.password; // Borrra el password para que no quede guardado.
                    //Guardar el user logeado
                    req.session.userLogged =  userToLogin
                    
                    //mantener session
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 10 })
                    }

                    return res.redirect('/users/userProfile')
                }else{
                //si el password no es valido
                return res.render('./users/sql/userLogin', {
                    errors: {
                        email: {msg:'Las credenciales no son validas'}
                    }
                    })
                }
            }else{
                return res.render('./users/sql/userLogin', {
                    errors: {
                        email: {msg:'Las credenciales no son validas'}
                    }
                })
            }
        }).catch(function(error){
            res.send(error);
        })
    },
    userProfile : (req, res)=>{
        return res.render('./users/userProfile',{
            user: req.session.userLogged
        })
    },
    logout:function(req,res){//cerrar  cuenta de usuario
        req.session.userLogged = null;//para destruir la session, osea salir del login del perfil
        res.clearCookie('userEmail',);//destruir la cookie
        //req.session = null;//para destruir la session, osea salir del login del perfil
        return res.redirect('/')
    }
    }


module.exports = controlador;