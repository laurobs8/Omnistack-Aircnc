const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {  // qual usuario solicitou a reserva
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {// qual spot esse usuario está querendo fazer a reserva
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }

  
})

module.exports = mongoose.model('Booking', BookingSchema)