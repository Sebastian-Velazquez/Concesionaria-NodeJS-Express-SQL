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
        /* let userToLogin = userModels.findByField('email', req.body.email); */
        const userToLogin  = db.Usuarios.findAll();
        if (userToLogin){
            if (req.body.password == userToLogin.password){
                delete userToLogin.password; //por seguridad
                req.session.userLogged =  userToLogin
                return res.redirect('/')
            }
            //return res.redirect('/user/login')
            return res.render('./users/sql/userLogin' , {
            errors: {
                email: {msg:'Las credenciales no son validas'}
            }
            } )

        }
        return res.render('./users/sql/userLogin', {
            errors: {
                email: {msg:'No se encontro el email en DB'}
            }
        })
        },
        /* res.send("Estas en el proceso de login") */
    }


/*     outer.post('/login',async(req,res,next)=>{
        const user = await User.findOne({ where : {email : req.body.email }});
        if(user){
           const password_valid = await bcrypt.compare(req.body.password,user.password);
           if(password_valid){
               token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
               res.status(200).json({ token : token });
           } else {
             res.status(400).json({ error : "Password Incorrect" });
           }
         
         }else{
           res.status(404).json({ error : "User does not exist" });
         }
         
         }); */


module.exports = controlador;