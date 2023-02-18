

module.exports = (sequelize, dataTypes) => {
    let alias = "productos"


    let cols = {
        id_product:{
            type: dataTypes.INTENGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            tpye: dataTypes.STRING
        },
        price:{
            tpye: dataTypes.INTENGER
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
            type: dataTypes.INTENGER,
            foreingKey: true
        },
        id_modelo:{
            type: dataTypes.INTENGER,
            foreingKey: true
        }

    }

    let config = {
        tableName: "productos",
        timesamps: false
    }

    const Productos = sequelize.define(alias, cols, config);
    return Productos
}