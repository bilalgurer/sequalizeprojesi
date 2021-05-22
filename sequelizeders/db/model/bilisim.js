const { DataTypes } = require('sequelize')
const db = require('../index')
const Bilisim = db.define('bilisim', {
    baslik: { type: DataTypes.STRING},
    sayfa_data: { type: DataTypes.TEXT}
}, { createdAt: false,updatedAt: false })
module.exports = Bilisim;