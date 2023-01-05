const controlador ={ //IMPORTANTE
    index: (req, res)=>{ //renderisar o mustrar una vista(pagina como antes)
        return res.render('index'); //no es necesario la estencion, lo hago para recordar. es para mostrar un archivo en la pagina
    }, 
    login:(req, res)=>{
        return res.render('./users/login');
    },
    productCart:(req, res)=>{
        return res.render('productCart');
    },
    productDetail:(req, res)=>{
        return res.render('productDetail');
    },
    register:(req, res)=>{
        return res.render('register');
    }
    //para poner datos en una pagina
    /* oferta:(req, res)=>{
            let listaOferta = [
                'lavadora',
                'licuadora',
                'destornillador',

            ];

            res.render('ofertas',{'listaOferta':listaOferta})
    }, */
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
