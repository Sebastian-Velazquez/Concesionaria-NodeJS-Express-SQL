

module.exports = (sequelize, dataTypes) =>{
    let alias = "Usuarios";
    let cols ={
        id_user:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        birth_date:{
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING               
        },
        password:{
            type: dataTypes.STRING
        },
        id_category:{
            type: dataTypes.INTENGER,
            foreingKey: true,
        },
        image:{
            type: dataTypes.STRING
        }

    };
    let config = {
        tableName: "usuarios",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
}