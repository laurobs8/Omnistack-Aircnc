// quais campos ira gravar no banco
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String
})
module.exports = mongoose.model('User', UserSchema) // a partir desse momento estamos criando o model, a partir desse momento o mongo ja sabe que ele tem que utilizar quando for criar um usuario que terá apenas o campo email