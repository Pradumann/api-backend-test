const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const UserProfile = mongoose.model('UserProfile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, async (req, res) => {
  res.send('Your email is awesome')
})

module.exports = router
