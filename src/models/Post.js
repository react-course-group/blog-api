const mongoose = require('mongoose')

module.exports = mongoose.model('Post', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    match: /^([a-z]{3,8}(,|\.) ){4,7}$/
  },
  content: {
    type: String,
    required: true,
    match: /^([a-z]{3,10}(,|\.)? ){50,250}$/
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
}))
