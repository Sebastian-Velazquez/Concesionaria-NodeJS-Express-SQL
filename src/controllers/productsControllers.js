const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const controlador ={ //IMPORTANTE
    productCart:(req, res)=>{
        return res.render('./products/productCart');
    },

    //-----------------------------DETALLE DE PRODUCTO---------------------------------------
    //Ruta: /products/detail
    productDetail:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro
        
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //Retorna el producto con el id mandado del req.params.id
        let productFiltrado = products.find(producto=>{
            return producto.id == id;
        })
        res.render('./products/productDetail',{producto:productFiltrado});
    },
    //-------------------------LISTA DE TODOS LOS PRODUCTOS------------
    //Ruta: /products/list
    list:(req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/listProduct',{'listaProductos':products})//es 'prodct' porque acordate que es el archivo .ejs el que.. antes coincidia.. se cambio para ser mas claros.
    },

    creationPrduct:(req, res)=>{
        return res.render('./products/creationPrduct');
    },
    editProduct:(req, res)=>{
        return res.render('./products/editProduct');
    },
    
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