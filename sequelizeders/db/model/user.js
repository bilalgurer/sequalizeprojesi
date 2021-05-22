const { DataTypes } = require('sequelize')
const db = require('../index')
const User = db.define('user', {
    adi: { type: DataTypes.STRING},
    mail: { type: DataTypes.STRING },
    sifre: { type: DataTypes.STRING(20) }
}, { createdAt: false,updatedAt: false })
module.exports = User;