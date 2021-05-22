const { DataTypes } = require('sequelize')
const db = require('../index')
const Tesvik_isveren = db.define('tesvik_isveren', {
    sira: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Tesvik_isveren;