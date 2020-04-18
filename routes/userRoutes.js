const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Profile = require('../models/Profile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, async (req, res) => {
  try {
    const profile = new Profile(req.body)
    await profile.save()
    return res.status(200).send({
      message: 'Saved successful',
      profile: req.body
    })
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
      message: 'Query successful',
      profile: profile
    })
  } catch (error) {
    return res.status(422).send({
      error: error,
      message: 'Failed to retrieve user profile because ' + error.message
    })
  }
})

router.post('/updateUserProfile', verifyToken, async (req, res) => {
  try {
    const { email, name, username } = req.body
    const profile = await Profile.updateOne(
      {
        email: email
      },
      {
        name: name,
        username: username
      }
    )
    return res.status(200).send({
      message: 'Update successful',
      profile: req.body
    })
  } catch (error) {
    return res.status(422).send({
      error: error,
      message: 'Failed to update user profile because ' + error.message
    })
  }
})

router.post('/uploadProfilePicture', verifyToken, async (req, res) => {
  return res.status(200).send({
    message: 'Profile picture updated',
    picture: ''
  })
  // try {
  //   return res.status(200).send({
  //     message: 'Profile picture updated',
  //     picture: ''
  //   })
  // } catch (e) {
  //   return res.status(422).send({
  //     error: e,
  //     message: 'Failed to upload profile picutre because ' + e.message
  //   })
  // }
})

module.exports = router
