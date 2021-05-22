const Haber = require('./haber')
const Role = require('./role')
const User = require('./user')

const Bilisim = require('./bilisim')
const Cevap = require('./cevap')
const Haber_kategori = require('./haberkategori')
const Haberyorum_makale = require('./haberyorum_makale')
const Haberyorum = require('./haberyorum')
const Hukuk = require('./hukuk')
const Makale = require('./makale')
const Soru = require('./soru')
const Tesvik_isci = require('./tesvik_isci')
const Tesvik_isveren = require('./tesvik_isveren')
const Tesvik = require('./tesvik')

Role.hasMany(User)
User.belongsTo(Role)

User.hasMany(Haber)
Haber.belongsTo(User)

User.hasMany(Haberyorum)
Haberyorum.belongsTo(User)

User.hasMany(Makale)
Makale.belongsTo(User)

Haber.hasMany(Haberyorum)
Haberyorum.belongsTo(Haber)

Haber_kategori.hasMany(Haber)
Haber.belongsTo(Haber_kategori)

Haber_kategori.hasMany(Makale)
Makale.belongsTo(Haber_kategori)

Makale.hasMany(Haberyorum_makale)
Haberyorum_makale.belongsTo(Makale)

User.hasMany(Tesvik)
Tesvik.belongsTo(User)

Tesvik.hasMany(Tesvik_isveren)
Tesvik_isveren.belongsTo(Tesvik)

Tesvik.hasMany(Tesvik_isci)
Tesvik_isci.belongsTo(Tesvik)

User.hasMany(Soru)
Soru.belongsTo(User)

Soru.hasMany(Cevap)
Cevap.belongsTo(Soru)

Hukuk.hasMany(User)
User.belongsTo(Hukuk)

Bilisim.hasMany(User)
User.belongsTo(Bilisim)




module.exports = {Haber,Role,User,Bilisim,Cevap,Haber_kategori,Haberyorum_makale,Haberyorum,Hukuk,Makale,Soru,Tesvik_isci,Tesvik_isveren,Tesvik}