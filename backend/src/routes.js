const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const SessioController = require('./controllers/SessioController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessioController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/dashboards', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store) // rota encadeada (nested)


module.exports = routes