let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    index:(req, res)=>{
        res.send("hola")
    },
    list: (req, res) => {
        db.Cancion.findAll(
            {
                include: {
                    all: true,
                    nested: true
                } 
            })
            /* .then(canciones => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: canciones.length,
                        url: 'api/canciones'
                    },
                    data: canciones
                }
                res.json(respuesta);
            }) */
    }

}

module.exports = controlador;