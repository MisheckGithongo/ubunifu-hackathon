const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const alertRoutes = require('./routes/alert')

const app = express()

mongoose.connect('mongodb+srv://mesh:omriFCJCaIuSr1nx@misheckilo-freecluster.fcmvh.mongodb.net/mbcalert?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
  console.log('connected to mongodb')
})
app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/alert', alertRoutes)

module.exports = app