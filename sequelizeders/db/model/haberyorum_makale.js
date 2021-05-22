const { DataTypes } = require('sequelize')
const db = require('../index')
const Haberyorum_makale = db.define('haberyorum_makale', {
    baslik: { type: DataTypes.STRING},
    aciklama: { type: DataTypes.TEXT }
}, { createdAt: false,updatedAt: false })
module.exports = Haberyorum_makale;