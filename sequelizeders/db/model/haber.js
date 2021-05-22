const { DataTypes } = require('sequelize')
const db = require('../index')
const Haber = db.define('haber', {
    baslik: { type: DataTypes.STRING},
    data: { type: DataTypes.TEXT },
    resim: { type: DataTypes.BLOB },
    kategori: { type: DataTypes.STRING }
}, { createdAt: false,updatedAt: false })
module.exports = Haber;