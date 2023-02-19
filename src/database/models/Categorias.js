module.exports = (sequelize, dataTypes) => {
    
    let alias = "categorias";

    let cols = {
        id_category : {
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
          type: dataTypes.STRING

        }
    }

    let config = {
        tableName : "categorias",
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config)
    return Categoria

}