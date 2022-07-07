import sequelize from "sequelize";

const db= new sequelize('db_app','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db