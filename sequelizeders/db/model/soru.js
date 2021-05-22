const { DataTypes } = require('sequelize')
const db = require('../index')
const Soru = db.define('soru', {
    baslik: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Soru;