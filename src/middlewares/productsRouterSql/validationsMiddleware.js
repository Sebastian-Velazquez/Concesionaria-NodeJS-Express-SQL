//ponemos en una variable las validaciones que necesitamos
//https://github.com/validatorjs/validator.js Para buscar
const path = require("path");
const {body} = require("express-validator");//para validar solo lo que nos pasa el body//Tambien en vez de body podemos usar check()

const validations =[
    body('name').notEmpty().withMessage('Tienes que escribir el nombre del producto'),  //firstName sale del name de ejs. notEmty es una validacion, valida si el campo esta vacio
    body('price').notEmpty().withMessage('Tienes que escribir un precio').bail()
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    //body('anio').isDate().withMessage('Tienes que escribir una fecha correcto'),
    body('color').notEmpty().withMessage('Tienes que seleccionar un color'),//bail para que cote la ejecicion, en este caso si hay un campo vacio
    body('model').notEmpty().withMessage('Tienes que seleccionar un modelo'),//bail para que cote la ejecicion, en este caso si hay un campo vacio
    body('image').custom((value, {req})=> {
        let file = req.file;
        let aceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        
        if (file){
            let fileExtension = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidos son ${aceptedExtensions.join(', ')}`)
            }
        }
        return true
    }),
    body('anio').isDate().withMessage('Tienes que escribir una fecha correcto').bail()
    .custom((value,{req})=>{
        //VALIDAR FECHA
    // Convertimos la fecha de nacimiento en un objeto Date de JavaScript
    let fecha = new Date(req.body.anio);
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