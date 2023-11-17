const {Sequelize,DataTypes} = require('sequelize')
const dbConnect = require('../dbConnect')
const Admins =dbConnect.define('Admin',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
   email:{
    type: DataTypes.STRING,
    allowNull: false,
   },
   password:{
    type:DataTypes.STRING,
    allowNull: false,
   },
   
})
Admins.sync({alter:true})
module.exports = Admins