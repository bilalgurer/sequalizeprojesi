const { DataTypes } = require('sequelize')
const db = require('../index')
const Tesvik = db.define('tesvik', {
    baslik: { type: DataTypes.STRING},
    kanun: { type: DataTypes.STRING },
    baslama: { type: DataTypes.DATEONLY },
    bitis: { type: DataTypes.DATEONLY },
    yasa: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Tesvik;