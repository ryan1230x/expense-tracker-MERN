const Sequelize=require('sequelize');
const db=require('../config/db');

const Transaction=db.define('Transaction',{
    text:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});
module.exports=Transaction