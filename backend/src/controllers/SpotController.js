const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {

  //Filtro
  async index(req, res) {

    const { tech } = req.query

    const spots = await Spot.find({ techs: tech }) // vai buscar essa string dentro do array dos spots e retornar so o que tem essa tecnologia

    return res.json(spots)
  },

  async store(req, res) {
    console.log(req.body)
    console.log(req.file)

    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers // header é o cabeçalho (autenticação, idioma, id)

    const user = await User.findById(user_id)
    if (!user) {
      return res.status(400).json({ error: "User does not exist" })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()), // separa por virgula e elimina espaços em branco
      price
    })

    return res.json(spot)
  }
}