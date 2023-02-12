//Se crea un metodo literal aca, que contendra todos lo metodos para el registro de usuario
//se usa para poder reducir el codigo en los controllers y usarlo en varios lugar, asi reduciendo las lineas de codigo

const fs = require('fs');
const path = require('path'); 
//const { subscribe } = require('../routes/userRouter');


const User = {
    //ubucacion de la base de datos-
    fileName: path.join(__dirname, '../data/userDataBase.json'),
    //llamo a la DB y lo convierto en array para poder usarlo
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    findAll: function(){ //lo mismo que getData. Puede que se use para poder editar la DB sin tocar el getData
        return this.getData();
    },
    //buscar por ID
    findByPk: function(id){
        let allUsers = this.findAll();//llamo a todos los usuarios
        let userFound = allUsers.find(oneUser => oneUser.id === id);//estoy viendo que el id de allusers es igual al id recibido.
        return userFound; //retorna el usuario con el id igual al pasado por parametro
    },
    //buscar por cualquier capo que yo ponga en el parametro
    //Recordemos que find busca el primero, por eso es conveniente usarlo en claves primarias y foraneas, osea compos cuyo dato no se repite.
    findByField: function(field,text){
        let allUsers = this.findAll();//llamo a todos los usuarios
        let userFound = allUsers.find(oneUser => oneUser[field] === text);//estoy valida cuando el field que me pasan es igual al texto que me pasan
        return userFound; //retorna el usuario con el id igual al pasado por parametro
            //ejemplo para entender(sacarlo del array): console.log(User.findByField('email','gsantora1@slideshare.net')); 
            //ejeturar en la consola: node src/models/User.js
            //Esto solo muestra al primero que encuentra.. si hay dos igual, mostrara uno. Es util esta funcion en campos unicos. o clave foranea y primaria
    },
    generateID: function(){ //generar id ya que json no es como sql que solo lo genera.
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){//si la db tiene id retorama el ultimo +1.. sino el db esta vacio y retorna 1
            return lastUser.id + 1;
        } return 1;
    },
    //Crear un usuario
    create: function(userData){//userData: la idea que sea un objeto litera que llega despues del formulario
        let allUsers = this.findAll();//llamo a todos los usuarios
        
        let newUser = {//poara json que para incorporar id
            id: this.generateID(),
            ...userData 
        } //quieredecir que va a contener el id mas todo lo que esta en allUsers
        
        allUsers.push(newUser);//fileName es el la ubucacion de la DB echo en arriba loprimero que se hizo en el metodo literario que estamos
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null," "));//Es para suscribir en la base de datos json
        //subscribo el allUsers en filename para que quede guardado
        return newUser;
    },
    delete: function(id){
        let allUsers = this.findAll();//llamo a todos los usuarios
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id); //devolmos todos los usuario menos el id que tomamos
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null," "));//gramos toso los usuarios menos el que se busco
        return true;
    }
}


module.exports = User;