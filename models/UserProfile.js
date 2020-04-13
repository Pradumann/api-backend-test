const mongoose = require('mongoose')
// const bcrypt = require('../index.js').bcrypt

const UserProfile = new mongoose.Schema({
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
  }
})

module.exports = mongoose.model('UserProfile', UserProfile)
