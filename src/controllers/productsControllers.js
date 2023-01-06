const controlador ={ //IMPORTANTE
    index: (req, res)=>{ //renderisar o mustrar una vista(pagina como antes)
        return res.render('index'); //no es necesario la estencion, lo hago para recordar. es para mostrar un archivo en la pagina
    },
    productCart:(req, res)=>{
        return res.render('./products/productCart');
    },
    productDetail:(req, res)=>{
        return res.render('./products/productDetail');
    },
    creationPrduct:(req, res)=>{
        return res.render('./products/creationPrduct');
    },
    editProduct:(req, res)=>{
        return res.render('./products/editProduct');
    },
    listProduct:(req, res)=>{
        return res.render('./products/listProduct');
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