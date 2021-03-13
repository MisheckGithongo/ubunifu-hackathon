const express = require('express')
const alertCtrl = require('../controllers/alert')
const router = express.Router()

router.post('/', alertCtrl.sendAlert)

module.exports = router
