import {Sequelize, DataTypes} from 'sequelize'
import modelDefinitions from '../models/index.js'
const sequelize = new Sequelize({
    host:'',
    database:'',
    username:'',
    password:'',
    dialect:''
})
const {models}=sequelize
modelDefinitions.forEach(model=>model(sequelize, DataTypes, models))
//Associations
const{}=models
//Associations
export default {models, sequelize}
