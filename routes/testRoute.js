const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/requireToken')

router.get('/', verifyToken, (req, res) => {
  res.send('Your email is ' + req.user.email)
})

module.exports = router
