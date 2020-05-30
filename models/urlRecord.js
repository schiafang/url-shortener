const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlRecordSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  shortener: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('UrlRecord', UrlRecordSchema)
