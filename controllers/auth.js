const Driver=  require ('../models/driver')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config()

exports.driverLogin = async (req, res) => {
    const { driverNo, pin } = req.body
    try {
        const driver = await Driver.findOne({ driverNo })
    if (!driver) {
      throw new Error('No user with that number')
    } 
    const valid = await bcrypt.compare(pin, driver.pin)
    if (!valid){
        res.status(500).json({ error: 'Incorrect Pin' })
      }
      const accessToken = jsonwebtoken.sign(
        { id: driver.id, driverNo: driver.driverNo },
        process.env.JWT_SECRET,
        { expiresIn: '1y' },
      )
      const data = {
          accessToken,
          driverNo: driver.driverNo
      }
      res.status(200).json({ status: 'success', data })
    } catch (error) {
        res.status(500).json({ error: 'Server Error' })
    }
}

exports.saveDriver = async (req, res) => {
    const { driverNo, pin } = req.body
    const driver = new Driver({
        driverNo,
        pin: await bcrypt.hash(pin, 10)
    })
    try {
        const data = await driver.save()
        res.status(200).json({ status: 'success', message: 'Alert Sent'})
      } catch (error) {
        res.status(500).json({ error: 'Server Error' })
      }
}