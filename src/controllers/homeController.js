const controlador ={ //IMPORTANTE
    index: (req, res)=>{ //renderisar o mustrar una vista(pagina como antes)
        return res.render('index'); //no es necesario la estencion, lo hago para recordar. es para mostrar un archivo en la pagina
    }
    //para poner datos en una pagina
    /* oferta:(req, res)=>{
            let listaOferta = [
                'lavadora',
                'licuadora',
                'destornillador',
            ];                      //listaOferta de la izquierda es el que va en la pagina
            res.render('ofertas',{'listaOferta':listaOferta})
    }, */
}
        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
