let db = require("../database/models");
const bcryptjs = require("bcryptjs");//requiere bcrypt para las password
const {validationResult} = require('express-validator');

const controlador ={
    register:(req, res)=>{
        res.render("./users/userRegister")
    },
    processRegister:(req, res)=>{
        console.log(req.body.birt_date)
       //Validacion de Middlewares
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){//resultValidation.errors es un objeto literal
        return res.render('./users/userRegister', {
            errors: resultValidation.mapped(), //mapped: pasa la variable resultValidation a literiario 
            oldData: req.body //Para mostrar los datos bien ingresados
            });
        }
        //Validamos si ya existe el mail ingresado antes de cargar el usuario nuevo
        
        db.Usuarios.findOne({ //dindOne: busca y hay un dato que sea igual al madado por el body
            where:{
                email: req.body.email  //
            }
        }).then(userInDB=>{
            if (userInDB){
                return res.render('./users/userRegister', {
                    errors: {
                        email: {msg:'Este email ya esta registrado'}
                    }, //mapped: pasa la variable resultValidation a literiario 
                    oldData: req.body //Para mostrar los datos bien ingresados
                    }) ; 
            }else{
                //console.log(req.body.birt_date)
                db.Usuarios
            .create({
                first_name: req.body.firstName,  
                last_name: req.body.lastName,
                birth_date: req.body.birth_date,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10), 
                image: req.file ? req.file.filename : "avatar.jpg",
                id_category: 0
            })
        res.render('./users/userLogin')
            }

        })

    },
    login:(req, res)=>{
        res.render("./users/userLogin")
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
                    userToLogin.password = null; // Borrra el password para que no quede guardado.
                    //Guardar el user logeado
                    req.session.userLogged =  userToLogin
                    //res.send(req.session.userLogged)
                    //console.log(req.session.userLogged.id_category)
                    //mantener session
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})
                    }

                    return res.redirect('/users/userProfile')
                }else{
                //si el password no es valido
                return res.render('./users/userLogin', {
                    errors: {
                        email: {msg:'Las credenciales no son validas'}
                    }
                    })
                }
            }else{
                return res.render('./users/userLogin', {
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