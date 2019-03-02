const mongoose = require('mongoose')

module.exports = mongoose.model('Post', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    match: /^([a-z]{3,15}(,|.) ){5,15}$/
  },
  content: {
    type: String,
    required: true,
    match: /^([a-z]{3,15}(,|.) ){50,150}$/
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
}))
