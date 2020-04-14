const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Profile = require('../models/Profile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, async (req, res) => {
  try {
    const profile = new Profile(req.body)
    await profile.save()
    return res.status(200).send(req.body)
  } catch (error) {
    return res
      .status(422)
      .send({ error: error, message: 'Failed to save data' })
  }
})

router.post('/getUserProfile', verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne(req.body)
    return res.status(200).send({
      message: 'User profile is available',
      profile: profile
    })
  } catch (error) {
    return res.status(422).send({
      error: error,
      message: 'Failed to retrieve user profile'
    })
  }
})

module.exports = router
