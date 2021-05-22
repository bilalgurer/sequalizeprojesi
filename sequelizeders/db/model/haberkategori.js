const { DataTypes } = require('sequelize')
const db = require('../index')
const Haber_kategori = db.define('haber_kategori', {
    adi: { type: DataTypes.STRING}
    
}, { createdAt: false,updatedAt: false })
module.exports = Haber_kategori;