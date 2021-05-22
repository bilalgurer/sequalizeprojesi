const { DataTypes } = require('sequelize')
const db = require('../index')
const Cevap = db.define('cevap', {
    baslik: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Cevap;