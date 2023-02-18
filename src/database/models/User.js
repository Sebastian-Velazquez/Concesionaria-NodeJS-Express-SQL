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
        }
    };
    let config = {
        tableName: "usuarios",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;
}