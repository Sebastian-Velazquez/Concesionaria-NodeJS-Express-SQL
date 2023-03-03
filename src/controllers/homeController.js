const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
let db = require("../database/models");

const controlador ={ //IMPORTANTE
    //-----------------IDEX DINAMICO-----------------------
    index: (req, res)=>{ 
        let pedidoProductos = db.Productos.findAll()
        let pedidoModelos = db.Modelos.findAll()
        Promise.all([pedidoProductos, pedidoModelos])//para poder llamar dos tablas
            .then(function([productos, modelos]){
                res.render("index",{
                    modelos:modelos,
                    productos:productos})
            })
            .catch(function(error){
                res.send(error)
        }) 
        /**************** */

  /*       const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productosSedan = products.filter( producto => { //filtro en el main
            return producto.category == "sedan"
        });

        let productosCoupe = products.filter( producto => { //filtro en el main
            return producto.category == "coupe"

        });
        res.render("index",{
            productosSedan: productosSedan, //No es necesario el mismo nombre.. Para ejs se usa la izquierda
            productosCoupe: productosCoupe}); */
    } 
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
