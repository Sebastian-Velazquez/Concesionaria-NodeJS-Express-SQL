const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
//const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
let db = require("../database/models");

const controlador ={ //IMPORTANTE
    //-----------------IDEX DINAMICO-----------------------
    index: (req, res)=>{ 
        db.Productos.findAll({
            where: {
                outstanding : 1,
                delete:0
            },
            order:[
                ["price", "DESC"]
            ]
        })
        .then(productos =>{
            res.render("index",{productos:productos})
        
        })
    },
    search:(req,res)=>{
        if(req.query.search){
            let resultado = db.Productos
                .findAll({
                    where:{
                        name:{[db.Sequelize.Op.like] : '%' + req.query.search + '%' },
                        delete:0
                    }
                });
            let modelos= db.Modelos.findAll();
            Promise.all([resultado, modelos])
                .then(([resultados,modelos])=>{
                res.render("./products/productsSearch",{
                    resultados:resultados,
                    modelos:modelos
                });
            })
        }else{
            db.Modelos.findAll()
            .then(modelos=>{
                res.render("./products/productsSearch",{
                    resultados:"",
                    modelos:modelos
            })
            })
            //res.redirect("./")
        }
    }
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
