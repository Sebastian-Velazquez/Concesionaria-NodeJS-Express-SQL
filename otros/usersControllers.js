const bcryptjs = require("bcryptjs");//requiere bcrypt para las password
const userModels = require('../models/userModels')
const {validationResult} = require('express-validator');


const controlador ={ //IMPORTANTE
    
    //home-user
    login:(req, res)=>{
        return res.render('./users/login');
    },
    register:(req, res)=>{
        return res.render('./users/register');
    },
    processRegister:(req,res)=>{
        //Validacion de Middlewares
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){//resultValidation.errors es un objeto literal
        return res.render('./users/register', {
            errors: resultValidation.mapped(), //mapped: pasa la variable resultValidation a literiario 
            oldData: req.body //Para mostrar los datos bien ingresados
            });
        }



        let userToCreate = {//no me qedo entendido .. creo que es oara sacar el pash y no mostrar toda la infomacion del la ruta
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),//le doy el password del body y el dias es la encriptacion
            image: req.file.filename //enctype="multipart/form-data"
        }

        let userCreated = userModels.create(userToCreate);//ejecuta los comandos de create de User.js
        return res.redirect('/user/login')
    },
    processLogin:(req,res)=>{
        let userToLogin = userModels.findByField('email', req.body.email);

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password; //por seguridad
                req.session.userLogged =  userToLogin

                if(req.body.remember) {//remember: es el name que le pusimos al checkbox en login.ejs
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })//res.cookie: setea una cookie
				}
                return res.redirect('/user/userProfile')
            }
            //return res.redirect('/user/login')
            return res.render('./users/login' , {
            errors: {
                email: {msg:'Las credenciales no son validas'}
            }
            } )

        }
        return res.render('./users/login', {
            errors: {
                email: {msg:'No se encontro el email en DB'}
            }
        })
    },
    userProfile : (req, res)=>{
        return res.render('./users/userProfile',{
            user: req.session.userLogged
        })
    },
    logout:function(req,res){//cerrar  cuenta de usuario
        res.clearCookie('userEmail');//destruir la cookie
        req.session.destroy();//para destruir la session, osea salir del login del perfil
        return res.redirect('/')
    }
}


        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
