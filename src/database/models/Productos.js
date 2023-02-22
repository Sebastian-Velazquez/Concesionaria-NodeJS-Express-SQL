

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
        año:{
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
        }

    }

    let config = {
        tableName: "productos",
        timesamps: false
    }

    const Productos = sequelize.define(alias, cols, config);
    return Productos
}