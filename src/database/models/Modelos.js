module.exports = (sequelize, dataTypes) => {
    let alias = "Modelos";

    let cols = {
    id_modelo:{
        type: dataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    tipo_de_modelo:{
        type:  dataTypes.STRING
    }
    }
    let config = {
        tableName: "modelos",
        timestamps: false
    }

    const Modelos = sequelize.define(alias, cols, config);

    //Definimos las relaciones o asociaciones
    Modelos.associate = models =>{
     //un modelo tiene muchos autos
     Modelos.hasMany(models.Productos,{ //hasMany: uno a muchos 
        as: "productos",
        foreignKey: "id_product"
    });      
    }

    return Modelos
}