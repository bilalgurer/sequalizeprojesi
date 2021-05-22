const { DataTypes } = require('sequelize')
const db = require('../index')
const Makale = db.define('makale', {
    baslik: { type: DataTypes.STRING},
    data: { type: DataTypes.TEXT },
    resim: { type: DataTypes.BLOB },
    kategori: { type: DataTypes.STRING }
}, { createdAt: false,updatedAt: false })
module.exports = Makale;