//ponemos en una variable las validaciones que necesitamos
//https://github.com/validatorjs/validator.js Para buscar
const path = require("path");
const {body} = require("express-validator");//para validar solo lo que nos pasa el body//Tambien en vez de body podemos usar check()

const validations =[
    body('name').notEmpty().withMessage('Tienes que escribir el nombre del producto'),  //firstName sale del name de ejs. notEmty es una validacion, valida si el campo esta vacio
    body('price').notEmpty().withMessage('Tienes que escribir un precio').bail()
                .isCurrency().withMessage('Tienes que escribir un numero correcto'),//withMessage: para cambiar el mesaje de error
    body('discount').notEmpty().withMessage('Tienes que escribir tu email').bail()//bail para que cote la ejecicion, en este caso si hay un campo vacio
                .isCurrency().withMessage('Debes escribir un formato de email correcto. Ejemplo, info@mail.com'),
    body('image').custom((value, {req})=> {
        let file = req.file;
        /* console.log(file) */
        let aceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        
        if (!file){
            throw new Error('Tenes que subir una imagen'); //sacado directamente de express-validator
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!aceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidos son ${aceptedExtensions.join(', ')}`)
            }
        }
        return true
    })
];
module.exports = validations;