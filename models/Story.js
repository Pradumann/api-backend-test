const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  story: {
    type: String,
    required: true
  },
  storyId: {
    type: String,
    required: true,
    unique: true
  }
})

mongoose.model('Story', storySchema)
