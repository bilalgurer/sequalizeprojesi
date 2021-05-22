const sequelize = require("sequelize")
const {myconnect}=require('./config/config.json')
const url = `postgres://${myconnect.dialect}:${myconnect.password}@${myconnect.host}:${myconnect.port}/${myconnect.database}`



const db = module.exports = new sequelize(url)
require('./model/index')

function baglan() {
    return db.sync({ force: false })
}

db.baglan = baglan