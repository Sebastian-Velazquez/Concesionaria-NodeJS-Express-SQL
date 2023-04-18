let db = require("../database/models");
const {validationResult} = require('express-validator');

const controlador ={
    listUsers: async (req, res)=>{
        try{
            const users = await  db.Usuarios.findAll();
            let apiUsers =[]
            for(let i=0; i < users.length; i++) {
                let nuevoUsers = {
                    id: users[i].id_user,
                    name:users[i].first_name + " " + users[i].last_name,
                    email:users[i].email,
                    detail: "http://localhost:3001/api/users/"+users[i].id_user
                }
                apiUsers.push(nuevoUsers)
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
    detailUsers: async(req,res)=>{
        try{
            const user = await  db.Usuarios.findByPk(req.params.id);/* findAll( {
                    where:{
                    id_user: req.params.id,
                    }
                }) */
                
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
                    let nuevoproducts = {
                        id: products[i].id_product,
                        name:products[i].name,
                        description:products[i].description,
                        modelo: products[i].modelo.tipo_de_modelo,//relacion uno a muchos
                        detail: "http://localhost:3001/api/products/" + products[i].id_product
                    }
                    apiProducts.push(nuevoproducts)
                }
        res.json({
            count: apiProducts.length,
            users: apiProducts,
            status: 200
        })
        } catch (error){
            console.log(error);
            res.status(500).send('Error al obtener los productos');
        }
    },
    detailproducts: async (req,res)=>{
        try{

        }catch(e){
            console(e);
            res.send(500).send("Error al tener el detalle del producto")
        }
    }
}

module.exports = controlador;
