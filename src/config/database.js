module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "bcd127",
    database: "sqlnode",
    define:{
        //O banco cria automaticamente as colunas created_at e updated_at nas tabelas
        timestamps:true,

        //separação de palavras compostas por "_" Ex: user_group esse formato é chamado de snack case
        underscored:true
    }
}