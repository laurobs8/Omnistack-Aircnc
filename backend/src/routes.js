const express = require('express')
const SessioController = require('./controllers/SessioController')

const routes = express.Router()

routes.post('/sessions', SessioController.store)


module.exports = routes