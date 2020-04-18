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
    trim: true,
    unique: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    unique: true
  },
  phone: {
    type: String,
    trim: true,
    default: '',
    unique: true
  },
  journeyId: {
    type: String,
    trim: true,
    default: '',
    unique: true
  },
  profilePicture: {
    type: String,
    trim: true,
    default: ''
  }
})

module.exports = mongoose.model('Profile', Profile)
