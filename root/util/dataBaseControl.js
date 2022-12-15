import { Sequelize, DataTypes } from 'sequelize'
import modelDefinitions from '../models/index.js'
const sequelize = new Sequelize({
    host: '127.0.0.1',
    port:'3307',
    database: 'databasemdb',
    username: 'root',
    password: 'emanuel',
    dialect: 'mariadb',
    define: { freezeTableName: true }
})
const { models } = sequelize
modelDefinitions.forEach(model => model(sequelize, DataTypes, models))
//Associations
const { user } = models
//Associations
export default { models, sequelize,Sequelize }
