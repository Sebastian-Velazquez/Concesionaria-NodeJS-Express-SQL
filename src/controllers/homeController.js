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
        
        let pedidoProductosSedan= db.Productos.findAll({
            where: {
                id_modelo : 1
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoProductosCoupe = db.Productos.findAll({
            where: {
                id_modelo : 2
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoProductos4x4 = db.Productos.findAll({
            where: {
                id_modelo : 3
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoModelos = db.Modelos.findAll()
        Promise.all([pedidoProductosSedan, pedidoProductosCoupe,pedidoProductos4x4, pedidoModelos])//para poder llamar dos tablas
            .then(function([productosSedan,
                            pedidoProductosCoupe,
                            pedidoProductos4x4, 
                            modelos]){
                res.render("index",{
                    modelos:modelos,
                    productosSedan:productosSedan,
                    pedidoProductosCoupe:pedidoProductosCoupe,
                    pedidoProductos4x4:pedidoProductos4x4
                })
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
