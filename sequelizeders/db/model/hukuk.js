const { DataTypes } = require('sequelize')
const db = require('../index')
const Hukuk = db.define('hukuk', {
    baslik: { type: DataTypes.STRING},
    sayfa_data: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Hukuk;