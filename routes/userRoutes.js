const express = require('express')
const router = express.Router()
const UserProfile = mongoose.model('UserProfile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, async (req, res) => {
  res.send('Your email is awesome')
})

module.exports = router
