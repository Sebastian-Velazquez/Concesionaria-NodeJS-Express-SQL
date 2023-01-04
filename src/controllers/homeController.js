const controlador ={ //IMPORTANTE
    index: (req, res)=>{ //renderisar o mustrar una vista(pagina como antes)
        return res.render('home'); //no es necesario la estencion, lo hago para recordar. es para mostrar un archivo en la pagina
    }, 
    register:(req, res)=>{
        return res.render('register');
    },
    loguearse:(req, res)=>{
        return res.render('login');
    },
    oferta:(req, res)=>{
            let listaOferta = [
                'lavadora',
                'licuadora',
                'destornillador',
                'Marisol ♫'
            ];

            res.render('ofertas',{'listaOferta':listaOferta})
    },
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
