const express = require('express')
const router = express.Router()
const UrlRecord = require('../../models/urlRecord')

router.get('/', (req, res) => {
  return UrlRecord.find()
    .lean()
    .then(item => {
      res.render('index')
    })
    .catch(error => console.log('error'))
})

module.exports = router
