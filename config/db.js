require('dotenv').config()
const Sequelize=require('sequelize');
module.exports=new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host:process.env.HOST,
    dialect:'mysql'
});