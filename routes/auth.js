const express = require('express')
const authCtrl = require('../controllers/auth')
const router = express.Router()

router.post('/driver_login', authCtrl.driverLogin)
router.post('/add_driver', authCtrl.saveDriver)

module.exports = router
