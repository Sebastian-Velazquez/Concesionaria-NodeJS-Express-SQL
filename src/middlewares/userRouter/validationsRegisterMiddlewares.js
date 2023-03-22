//ponemos en una variable las validaciones que necesitamos
//https://github.com/validatorjs/validator.js Para buscar
const path = require("path");
const {body} = require("express-validator");//para validar solo lo que nos pasa el body//Tambien en vez de body podemos usar check()
//validacion para registrarse
const validations =[
    body('firstName').notEmpty().withMessage('Tienes que escribir tu nombre'),  //firstName sale del name de ejs. notEmty es una validacion, valida si el campo esta vacio
    body('lastName').notEmpty().withMessage('Tienes que escribir tu apellido'),  //firstName sale del name de ejs. notEmty es una validacion, valida si el campo esta vacio
    body('email').notEmpty().withMessage('Tienes que escribir tu email').bail()//bail para que cote la ejecicion, en este caso si hay un campo vacio
                .isEmail().withMessage('Debes escribir un formato de email correcto. Ejemplo, info@mail.com'),
    body('password').notEmpty().withMessage('Tienes que escribir un password'),     
    body('image').custom((value, {req})=> {
        let file = req.file;
        /* console.log(file) */
        let aceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        
        if (file){
            let fileExtension = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidos son ${aceptedExtensions.join(', ')}`)
            }
        }
        return true
    }),
    body('passwordValidate').custom((value, {req})=> {
        let password = req.body.password;
        let passwordValidate =req.body.passwordValidate;
        if (password != passwordValidate){
        throw new Error('las contraseñas no coinciden')
    }
    return true
    }),
    body('birth_date').isDate().withMessage('Tienes que escribir una fecha correcto').bail()
    .custom((value,{req})=>{
        //VALIDAR FECHA
    // Convertimos la fecha de nacimiento en un objeto Date de JavaScript
    let fecha = new Date(req.body.birth_date);
    // Calculamos la edad en milisegundos
    let milisegundos = Date.now() - fecha.getTime();
    // Convertimos la edad en milisegundos a años
    let anos = milisegundos / 1000 / 60 / 60 / 24 / 365.25;
        // Si la edad en años es mayor o igual a 18, la persona es mayor de edad
        if ( anos <= 0){
            throw new Error('Fecha no valida')
        }else{
            return true
        }
    })
];
module.exports = validations;