const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const alertRoutes = require('./routes/alert')
const connStr = process.env.DB_CONN

const app = express()

mongoose.connect(connStr)
mongoose.connection.once('open',()=>{
  console.log('connected to mongodb')
})
app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/alert', alertRoutes)

module.exports = app