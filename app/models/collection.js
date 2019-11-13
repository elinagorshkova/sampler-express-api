const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sounds: {
    type: Array
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
