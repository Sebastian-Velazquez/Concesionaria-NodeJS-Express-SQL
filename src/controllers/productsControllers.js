const fs = require('fs');
const path = require('path'); 
const {validationResult} = require('express-validator'); //validationResult es una funcion que tambien nos lo da express-validator 

//models

const productsModel = require('../models/productsModel')

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const controlador ={ //IMPORTANTE
    productCart:(req, res)=>{//Carrito
        return res.render('./products/productCart');
    },

    //*****************DETALLE DE PRODUCTO************
    //Ruta: /products/detail
    productDetail:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro

        const products = productsModel.findAll()
        //Retorna el producto con el id mandado del req.params.id
        let productFiltrado = products.find(producto=>{
            return producto.id == id;
        }) 
        res.render('./products/productDetail',{producto:productFiltrado});
    },


    //*****************LISTA DE TODOS LOS PRODUCTOS************
    //Ruta: /products/list
    list:(req, res)=>{
        const products = productsModel.findAll()
        res.render('./products/listProduct',{'listaProductos':products})//es 'prodct' porque acordate que es el archivo .ejs el que.. antes coincidia.. se cambio para ser mas claros.
    },
    //*****************CREAR PRDUCTO************
    create:(req, res)=>{
        return res.render('./products/creationPrduct');
    },
    processCreate:(req, res)=>{
        //validation
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){//resultValidation.errors es un objeto literal
            return res.render('./products/creationPrduct', {
                errors: resultValidation.mapped(), //mapped: pasa la variable resultValidation a literiario 
                oldData: req.body //Para mostrar los datos bien ingresados
                });
            }

        //Tomamos los datos del body
        let productoNuevo ={
            name: req.body.name,
            price: req.body.price,
            colors: req.body.colors,
            discount: req.body.discount,
            category: req.body.category,
            description: req.body.description,
            image: req.file ? req.file.filename : "default-image.png" //if ternario
        }
        //llamamos al create de Model pra grabar esta en una variable qe no se llama de nuevo. Su finalidad es ejecutar la funcion, nada mas
        let cargar = productsModel.create(productoNuevo);
        res.redirect("/products/list")//se hace un nuevo pedido al servidor y se va o nos refresca en la patalla una vez guardado el lista de producto controlloer list
    },


    //*****************EDITAR PRODUCTO************
    //ruta: /products/edit
    edit:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro
        const products = productsModel.findAll();
        //Retorna el producto con el id mandado del req.params.id
        let productFiltrado = products.find(producto=>{
            return producto.id == id;
        })
        //Listo para mandar a .ejs//se pone el nombre del ejs entre ''.
        res.render('./products/productEdit',{producto:productFiltrado,});
    },   
    processEdit:(req, res)=>{
         //validation
         const resultValidation = validationResult(req);
         if (resultValidation.errors.length > 0){
            let id = req.params.id //esto es lo que nos llega por parametro
            const products = productsModel.findAll();
            //Retorna el producto con el id mandado del req.params.id
            let productFiltrado = products.find(producto=>{
                return producto.id == id;
            })
            //Listo para mandar a .ejs//se pone el nombre del ejs entre ''.
            return res.render('./products/productEdit',{
                producto:productFiltrado,
                errors: resultValidation.mapped(),
                oldData: req.body
            });
         }



        //llamamos a todos lo datos
        const products = productsModel.findAll();

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
        // let edit = productsModel.edit(productoEditado)

        // MOdificar el array en el Id que esta posicionado - 
        let indice = products.findIndex(producto =>{
            return producto.id == id;
        })
        //en products donde se encontro el indice se va a reemplazar por el producto editado en la pagina ejs req.body
        products[indice] = productoEditado
        //Grabamos en la BD
        fs.writeFileSync(productsModel.fileName, JSON.stringify(products, null," "));//
        // la barra es porque vamos a una direccion que es la de lista de productos -- controller list 
        res.redirect("/products/list")
    },
    //*****************ELIMINAR PRODUCTO************
    delete:(req, res)=>{
        let id = req.params.id //esto es lo que nos llega por parametro
        const products = productsModel.findAll();
        //Retorna todos los id menos el que esta en la condicion
        let productFiltrado = products.filter(producto=>{
            return producto.id != id;
        });
        fs.writeFileSync(productsModel.fileName, JSON.stringify(productFiltrado, null," "));
        res.redirect("/products/list")
    }
}


        //exportamos el objeto literal con sus metodos
        module.exports = controlador;