let db = require("../database/models");//llamar db sql
//const {validationResult} = require('express-validator');

const controlador ={
    listUsers: async (req, res)=>{
        try{
            const users = await  db.Usuarios.findAll();//llame db los usuarios
            let apiUsers =[]//para guardar lo que se muestra en api.fsdfsd
            //for(let i=0; i < users.length; i++) {
            users.forEach(element => {
                let nuevoUsers = {
                    id: element.id_user,
                    name:element.first_name + " " + element.last_name,
                    email:element.email,
                    image:"http://localhost:3001/img/avatar/" +  element.image,
                    detail: "http://localhost:3001/api/users/"+element.id_user
                }
                apiUsers.push(nuevoUsers);
            });
            res.json({
                count: apiUsers.length,
                users: apiUsers,
                status: 200
            })
        } catch (error){
            console.log(error);
            res.status(500).send('Error al obtener los usuarios');
        }
    },
    detailUsers: async (req,res)=>{
        try{
            const user = await  db.Usuarios.findByPk(req.params.id);
            let apiUser = [];
                let nuevoUser = {
                    id: user.id_user,
                    name:user.first_name ,
                    last: user.last_name,
                    birthDate:user.last_date,
                    email:user.email,   
                    image:"http://localhost:3001/img/avatar/" +  user.image
                }
                    apiUser.push(nuevoUser)
            res.json({
                users: apiUser,
                status: 200
            })
        }catch (error){
            console.log(error);
            res.status(500).send('Error al obtener el usuario');
        }
    },
    listproducts: async (req, res) => {
        try{
        const products = await  db.Productos.findAll({
            where:{
                delete: 0,
            },
            include:[{association: "modelo"}]
            
        });
        const modelo = await db.Modelos.findAll()
        let apiProducts = []
                products.forEach(element => {
                    let nuevoProducts = {
                        id: element.id_product,
                        name:element.name,
                        description:element.description,
                        modelo: element.modelo.tipo_de_modelo,//relacion uno a muchos.
                        precio: element.price,
                        detail: "http://localhost:3001/api/products/" + element.id_product,
                        image:"http://localhost:3001/img/products/" + element.image,
                        count_modelo: element.modelo.length,
                        
                    }
                    apiProducts.push(nuevoProducts)
                });
        res.json({
            count: apiProducts.length,
            count_modelo: modelo.length,
            product: apiProducts,
            category_modelo: modelo,
            status: 200
        })
        } catch (error){
            console.log(error);
            res.status(500).send('Error al obtener los productos');
        }
    },
    detailproducts: async (req,res)=>{
        try{
            const product = await  db.Productos.findByPk(req.params.id,
                { 
                    include:[{association: "modelo"},{association: "color"}]
                });
            let apiProduct =[];
            let nuevoProduct = {
                id: product.id_product,
                name: product.name,
                price: product.price,
                anio: product.price,
                description: product.description,
                relation: [product.modelo,product.color],
                image:"http://localhost:3001/img/products/" + product.image
            }
            apiProduct.push(nuevoProduct)
            res.json({
                count: apiProduct.length,
                product: apiProduct,
                status: 200,
            });
        }catch(e){
            console.log(e);
            res.send(500).send("Error al tener el detalle del producto")
        }
    }
}

module.exports = controlador;
