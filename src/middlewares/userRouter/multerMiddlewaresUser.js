
//-----------------Multer--------------------
const multer = require("multer");
const path = require("path");//para multerj

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"public/img/avatar") //se pone la ruta como si estariamos en la raiz del proyecto.
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)) //se pone la tura como si estariamos en la raiz del proyecto.
    }
})
const upload = multer({storage:storage})
//-----------------Multer Fin--------------------

module.exports = upload;
