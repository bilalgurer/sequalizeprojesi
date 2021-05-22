const { DataTypes } = require('sequelize')
const db = require('../index')
const Role = db.define('role', {
    adi: { type: DataTypes.STRING, allowNull: false }

}, { createdAt: false,updatedAt: false })
module.exports = Role;