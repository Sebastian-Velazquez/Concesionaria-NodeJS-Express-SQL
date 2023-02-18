const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = (sequelize, DataTypes) =>{
    let alias = "Usuarios";
    let cols ={
        id_user:{
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
        birth_date:{
            type: DataTypes.DATE
        },
        email: {
            type: DataTypes.STRING               
        },
        password:{
            type: DataTypes.STRING
        },
        id_category:{
            type: DataTypes.INTEGER,
            foreingKey: true,
        },
        image:{
            type: DataTypes.STRING
        }

    };
    let config = {
        tableName: "usuarios",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
}