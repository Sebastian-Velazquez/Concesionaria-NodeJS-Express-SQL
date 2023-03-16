

module.exports = (sequelize, dataTypes) => {
    let alias = "Productos"


    let cols = {
        id_product:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.INTEGER
        },
        anio:{
            type: dataTypes.DATE
        },
        description:{
            type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        },
        id_color:{
            type: dataTypes.INTEGER, 
        },
        id_modelo:{
            type: dataTypes.INTEGER, 
        },
        outstanding:{
            type: dataTypes.INTEGER, 
        },
        delete:{
            type: dataTypes.INTEGER, 
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Productos = sequelize.define(alias, cols, config);
    
    //Definimos las relaciones o asociaciones
    Productos.associate = models =>{
        //Productos tienen un solo color
        Productos.belongsTo(models.Colores,{ //belongsTo: pertence a un solo genero. es una relacion de uno a muchos
            as: "color",
            foreignKey: "id_color",
        });   
        //Productos tienen un solo modelo
        Productos.belongsTo(models.Modelos,{ //belongsTo: pertence a un solo genero. es una relacion de uno a muchos
            as: "modelo",
            foreignKey: "id_modelo",
        }); 
    }
    return Productos
}