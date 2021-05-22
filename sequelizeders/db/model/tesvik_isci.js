const { DataTypes } = require('sequelize')
const db = require('../index')
const Tesvik_isci = db.define('tesvik_isci', {
    sira: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Tesvik_isci;