module.exports = (sequelize, DataTypes) =>{
    let alias = "Colores";
    let cols ={

    };
    let config = {
        tableName: "colores",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Colores = sequelize.define(alias, cols, config);

    return Colores;
}