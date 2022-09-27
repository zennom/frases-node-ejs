module.exports = (sequelize, DataType) =>{
    const Phrase = sequelize.define('Phrase',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        author:{
            type:DataType.INTEGER
        },
        txt:{
            type:DataType.STRING
        }
    },{
        tableName:'phrases',
        timestamps: false
    })

    return Phrase
}

