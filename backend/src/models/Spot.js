const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
  thumbnail: String, // imagem
  company: String, // empresa
  price: Number, // preco
  techs: [String], //vetor com strings dentro
  user: {
    type: mongoose.Schema.Types.ObjectId, // Referencia do usuario que criou o spot
    ref: 'User' // referencia pra qual modo é essa requisição
  }
})

module.exports = mongoose.model('Spot', SpotSchema)