import dataBaseControl from "./util/dataBaseControl.js"
const {sequelize}= dataBaseControl
await sequelize.sync({alter:true})
