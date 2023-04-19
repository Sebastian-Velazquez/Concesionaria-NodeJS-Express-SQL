let db = require("../database/models");//llamar db sql
//const {validationResult} = require('express-validator');

const controlador ={
    listUsers: async (req, res)=>{
        try{
            const users = await  db.Usuarios.findAll();//llame db los usuarios
            let apiUsers =[]//para guardar lo que se muestra en api.
            for(let i=0; i < users.length; i++) {
                let nuevoUsers = {
                    id: users[i].id_user,
                    name:users[i].first_name + " " + users[i].last_name,
                    email:users[i].email,
                    detail: "http://localhost:3001/api/users/"+users[i].id_user
                }
                apiUsers.push(nuevoUsers);
            }
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
        let apiProducts = []
                for(let i=0; i < products.length; i++) {
                    let nuevoProducts = {
                        id: products[i].id_product,
                        name:products[i].name,
                        description:products[i].description,
                        modelo: products[i].modelo.tipo_de_modelo,//relacion uno a muchos
                        detail: "http://localhost:3001/api/products/" + products[i].id_product
                    }
                    apiProducts.push(nuevoProducts)
                }
        res.json({
            count: apiProducts.length,
            product: apiProducts,
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
