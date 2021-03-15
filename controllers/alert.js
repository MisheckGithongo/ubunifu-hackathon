const dotenv = require('dotenv')

dotenv.config()

const AfricasTalking = require('africastalking')({ apiKey: process.env.AT_KEY, username: process.env.AT_USERNAME })

exports.sendAlert = (req, res) => {
    const { farmers } = req.body
    const to = '+254705850838'
    const sms = AfricasTalking.SMS
    const message = `Collection in Your Buying Center Soon,  Hurry Up`
    sms.send({ to, message, enque: true })
      .then(() => {
      })
      .catch(() => {
      })
    res.status(200).json({ status: 'success', message: 'alert sent' })
}