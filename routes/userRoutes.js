const express = require('express')
const router = express.Router()
const UserProfile = mongoose.model('UserProfile')
const verifyToken = require('../middleware/requireToken')

router.post('/saveUserProfile', verifyToken, (req, res) => {
  const { email, name, username, phone, journeyId, favouriteStories } = req.body
  
  try {
    const userProfile = new UserProfile({
      email,
      name,
      username,
      phone,
      journeyId,
      favouriteStories
    })
    await userProfile.save()
    res.status(200).send({msg: 'User profile save successfuly', value: userProfile})
  } catch(error) {
    res.status(422).send(error)
  }
})

module.exports = router
