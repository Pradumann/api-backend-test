const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
  name: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  username: {
    type: String,
    default: '',
    trim: true
  }
})

module.exports = mongoose.model('Profile', Profile)
