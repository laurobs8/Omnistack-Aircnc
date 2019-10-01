const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const SessioController = require('./controllers/SessioController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessioController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)


module.exports = routes