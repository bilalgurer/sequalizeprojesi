const db = require('../index')
const User = require('../model/user')
const Role = require('../model/role')

const Haber = require('../model/haber')
const Bilisim = require('../model/bilisim')
const Cevap = require('../model/cevap')
const Haber_kategori = require('../model/haberkategori')
const Haberyorum_makale = require('../model/haberyorum_makale')
const Haberyorum = require('../model/haberyorum')
const Hukuk = require('../model/hukuk')
const Makale = require('../model/makale')
const Soru = require('../model/soru')
const Tesvik_isci = require('../model/tesvik_isci')
const Tesvik_isveren = require('../model/tesvik_isveren')
const Tesvik = require('../model/tesvik')

const create = async () => {

    await db.baglan()
    await db.sync({ force: true })
    const myRol = await Role.create({adi:'admin'})
    
    await User.create({ adi: "Mesut", mail: 5, sifre: '2020-01-01',roleId:myRol.id })
    await User.create({ name: "murat", age: 6, dogtar: '2018-01-06' })

    await Haber.create({baslik:"haber",data:"data",resim:null,kategori:"kategori"})
    await Bilisim.create({baslik:"haber",sayfa_data:"data"})
    await Cevap.create({baslik:"haber",aciklama:"aciklama"})
    await Haber_kategori.create({adi:"adi"})
    await Haberyorum_makale.create({baslik:"baslik",aciklama:"aciklama"})
    await Haberyorum.create({baslik:"baslik",aciklama:"aciklama"})
    await Hukuk.create({baslik:"baslik",sayfa_data:"sayfa_data"})
    await Makale.create({baslik:"haber",data:"data",resim:null,kategori:"kategori"})
    await Soru.create({baslik:"baslik",aciklama:"aciklama"})
    await Tesvik.create({baslik:"haber",kanun:"kanun",baslama:"2021-01-15",bitis:"2021-06-01",yasa:"yasa",aciklama:"aciklama"})
    await Tesvik_isci.create({sira:"haber",aciklama:"aciklama"})
    await Tesvik_isveren.create({sira:"haber",aciklama:"aciklama"})

    await db.close()
}
create()



