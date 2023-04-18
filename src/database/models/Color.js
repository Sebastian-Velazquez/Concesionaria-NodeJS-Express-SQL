module.exports = (sequelize, dataTypes) =>{
    let alias = "Colores";
    let cols ={
        id_color: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "colores",//esto se pone porque lo general el nombbre de la tabla el mismo nombre que el js
        timestamps: false //es  por si no tiene las tablas createdate y update
    }

    const Colores = sequelize.define(alias, cols, config);


    //Definimos las relaciones o asociaciones
    Colores.associate = models =>{
        //un modelo tiene muchos autos
        Colores.hasMany(models.Productos,{ //hasMany: uno a muchos 
            as: "productos",
            foreignKey: "id_product"
        });      
        }
    return Colores;
}