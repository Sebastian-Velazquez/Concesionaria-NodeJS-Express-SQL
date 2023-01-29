const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const controlador ={ //IMPORTANTE
    //-----------------IDEX DINAMICO-----------------------
    index: (req, res)=>{ //renderisar o mustrar una vista(pagina como antes)
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        /* console.log(products) */
        let productosSedan = products.filter( producto => { //filtro en el main
            return producto.category == "sedan"
        });

        let productosCoupe = products.filter( producto => { //filtro en el main
            return producto.category == "coupe"

        });
        res.render("index",{
            productosSedan: productosSedan, //No es necesario el mismo nombre.. Para ejs se usa la izquierda
            productosCoupe: productosCoupe}); 
    }
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
