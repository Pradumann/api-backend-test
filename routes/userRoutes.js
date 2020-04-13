const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Profile = require('../models/Profile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, async (req, res) => {
  return res.status(200).send('Your email is awesome')
})

module.exports = router
