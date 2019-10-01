// Aqui ficara qualquer coisa que tenha a ver com sessão. ex: Login, logout, listagem de usuarios logados qualquer coisa referente a sessão

/*
Metodos disponiveis que podemos ter dentro de um CONTROLLER (Padrão do MVC)
index = criando um metodo que vai retornar uma listagem de sessoes
show = listar uma unica sessão
store = quando se quer criar uma sessão
update = alterar uma sessão
destroy = terminar uma sessão
*/

const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email } = req.body // pegar o email cadastrado

    // Caso o usuario ja tenha cadastro, apenas retornar o email cadastrado, nao criar novo
    let user = await User.findOne({ email })
    if (!user) { // Caso o usuario ja tenha cadastro, apenas retornar o email cadastrado, nao criar novo
      user = await User.create({ email }) // informações de cadastro do usuario, nesse caso, apenas email
    }

    return res.json(user)
  }
}