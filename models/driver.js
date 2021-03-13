const mongoose = require('mongoose')

const { Schema } = mongoose

const driverSchema = new Schema({
  driverNo: { type: String, unique: true },
  pin: { type: String },
})

module.exports = mongoose.model('Driver', driverSchema)