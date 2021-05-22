const { DataTypes } = require('sequelize')
const db = require('../index')
const Haber_yorum = db.define('haber_yorum', {
    baslik: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT }
}, { createdAt: false,updatedAt: false })
module.exports = Haber_yorum;