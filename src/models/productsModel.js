const fs = require('fs');
const path = require('path'); 
//const { subscribe } = require('../routes/productsRouter');

const productsModel = {
     //ubucacion de la base de datos-
    fileName: path.join(__dirname, '../data/productsDataBase.json'),
     //llamo a la DB y lo convierto en array para poder usarlo
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    findAll: function(){ //lo mismo que getData. Puede que se use para poder editar la DB sin tocar el getData
        return this.getData();
    },
    generateID: function(){ //generar id ya que json no es como sql que solo lo genera.
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        } return 1;
    },
    create: function(userData){//userData es solo para el id
        let allUsers = this.findAll();//llamo a todos los usuarios
        let productoNuevo = {//poara json que para incorporar id
            id: this.generateID(),
            ...userData 
        } //quieredecir que va a contener el id mas todo lo que esta en allUsers
        //Graba en DB
        allUsers.push(productoNuevo);//fileName es el la ubucacion de la DB echo en arriba loprimero que se hizo en el metodo literario que estamos
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null," "));//Es para suscribir en la base de datos json
        //subscribo el allUsers en filename para que quede guardado
        return productoNuevo;
    }
}
//console.log(productsModel.detalle())

module.exports = productsModel;