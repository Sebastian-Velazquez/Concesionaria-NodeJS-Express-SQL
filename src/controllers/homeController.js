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
        let pedidoProducto= db.Productos.findAll({
            where: {
                outstanding : 1
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        .then(productos =>{
            console.log(productos)
            res.render("index",{productos:productos})
        
        })
        
/*         let pedidoProductosSedan= db.Productos.findAll({
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
        let pedidoProductosCamioneta = db.Productos.findAll({
            where: {
                id_modelo : 4
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoProductosLujo = db.Productos.findAll({
            where: {
                id_modelo : 5
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoProductosDeportivo = db.Productos.findAll({
            where: {
                id_modelo : 6
            },
            order:[
                ["price", "DESC"]
            ],
            limit: 4
        })
        let pedidoModelos = db.Modelos.findAll()
        Promise.all([pedidoProductosSedan, 
            pedidoProductosCoupe,
            pedidoProductos4x4, 
            pedidoProductosCamioneta,
            pedidoProductosLujo,
            pedidoProductosDeportivo,
            pedidoModelos])//para poder llamar dos tablas
                .then(function([productosSedan,
                                pedidoProductosCoupe,
                                pedidoProductos4x4, 
                                pedidoProductosCamioneta,
                                pedidoProductosLujo,
                                pedidoProductosDeportivo,
                                modelos]){
                    res.render("index",{
                        modelos:modelos,
                        productosSedan:productosSedan,
                        pedidoProductosCoupe:pedidoProductosCoupe,
                        pedidoProductos4x4:pedidoProductos4x4,
                        pedidoProductosLujo,
                        pedidoProductosDeportivo,
                        pedidoProductosCamioneta:pedidoProductosCamioneta
                    })
                })
            .catch(function(error){
                res.send(error)
        })  */
    },
    search:(req,res)=>{
        if(req.query.search){
            db.Productos
            .findAll({
                where:{
                    name:{[db.Sequelize.Op.like] : '%' + req.query.search + '%' }
                }
            }).then(resultados=>{
                res.render("./products/sql/productsSearch",{
                    resultados:resultados
                });
            })
        }else{
            res.render("./products/sql/productsSearch",{
                resultados:""
            })
            //res.redirect("./")
        }
    }
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
