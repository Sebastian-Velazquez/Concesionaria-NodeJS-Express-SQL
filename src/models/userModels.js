const fs = require("fs");

const User = {
    fileName: "./data/userDataBase.json",

    getData: function(){
        return (fs.readFileSync(this.fileName, ""))
    },
    
    findAll: function (){
        return this.getData();
    },

   
    findByPk: function (id) {
        let allUsers= this.findAll();
        let userFound = allUsers.find(user=> user.id=== id);
        return userFound
    },

    create: function(userData){

    }
    
}

console.log(User.findByPk(2))