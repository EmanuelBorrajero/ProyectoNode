import {Sequelize, DataTypes} from 'sequelize'
import modelDefinitions from '../models/index.js'
const sequelize = new Sequelize({
    host:'127.0.0.1:3306',
    database:'databasemysql',
    username:'Emanuel',
    password:'2509',
    dialect:'mysql',
    define:{freezeTableName:true}
})
const {models}=sequelize
modelDefinitions.forEach(model=>model(sequelize, DataTypes, models))
//Associations
const{user}=models
//Associations
export default {models, sequelize}
