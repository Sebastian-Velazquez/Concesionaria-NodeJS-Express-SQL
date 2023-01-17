const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const controlador ={ //IMPORTANTE
    productCart:(req, res)=>{//Carrito
        return res.render('./products/productCart');
    },

    //*****************DETALLE DE PRODUCTO************
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


    //*****************LISTA DE TODOS LOS PRODUCTOS************
    //Ruta: /products/list
    list:(req, res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('./products/listProduct',{'listaProductos':products})//es 'prodct' porque acordate que es el archivo .ejs el que.. antes coincidia.. se cambio para ser mas claros.
    },
    //*****************CREAR PRDUCTO************
    create:(req, res)=>{
        return res.render('./products/creationPrduct');
    },
    processCreate:(req, res)=>{
        //llamamos a todos lo datos
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoNuevo ={
            id: products.length + 1, //revisa el ultimo en la BD y le suma 1. para no pisar los ID que son valores unicios y secuencial
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            image: req.file ? req.file.filename : "default-image.png" //if ternario
        }
        
        products.push(productoNuevo);
        
        //Grabamos en la BD
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null," "));//??
        // la barra es porque vamos a una direccion que es la de lista de productos -- controller list
        res.redirect("/products/list")//se hace un nuevo pedido al servidor y se va o nos refresca en la patalla una vez guardado el lista de producto controlloer list
    },


    //*****************EDITAR PRODUCTO************
    //ruta: /products/edit
    edit:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro
        
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //Retorna el producto con el id mandado del req.params.id
        let productFiltrado = products.find(producto=>{
            return producto.id == id;
        })

        //Listo para mandar a .ejs//se pone el nombre del ejs entre ''.
        res.render('./products/productEdit',{producto:productFiltrado,});
    },   
    processEdit:(req, res)=>{
        //llamamos a todos lo datos
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let id = req.params.id; 
        let productoIdBody = products.find(producto=>{
            return producto.id == id;
        })
    
        let productoEditado ={
        id: productoIdBody.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: req.file ? req.file.filename : productoIdBody.image,
        colors: req.body.colors
        }
        // MOdificar el array en el Id que esta posicionado - 
        let indice = products.findIndex(producto =>{
            return producto.id == id;
        })
        //en products donde se encontro el indice se va a reemplazar por el producto editado en la pagina ejs req.body
        products[indice] = productoEditado
        //Grabamos en la BD
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null," "));//
        // la barra es porque vamos a una direccion que es la de lista de productos -- controller list
        res.redirect("/products/list")
    },
    //*****************ELIMINAR PRODUCTO************
    delete:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro
        
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //Retorna todos los id menos el que esta en la condicion
        let productFiltrado = products.filter(producto=>{
            return producto.id != id;
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(productFiltrado, null," "));
        res.redirect("/products/list")
    }
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;