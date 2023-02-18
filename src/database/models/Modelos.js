module.exports = (sequelize, dataTypes) => {
    let alias = "modelos";

    let cols = {
        id_modelos:{
            type: dataTypes.INTENGER,
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
    return Modelos
}