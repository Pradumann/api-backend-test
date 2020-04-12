const mongoose = require('mongoose')
// const bcrypt = require('../index.js').bcrypt

const userProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: false,
    required: false
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: false
  },
  journeyId: {
    type: String,
    unique: true,
    required: false
  },
  favouriteStories: {
    type: [
      {
        type: String
      }
    ],
    required: false
  }
})

mongoose.model('UserProfile', userProfileSchema)
