const express = require('express')
const router = express.Router()
const UrlRecord = require('../../models/urlRecord')
const randomUrl = require('../../public/javascripts/random')

router.get('/', (req, res) => {
  return UrlRecord.find()
    .lean()
    .then(item => {
      res.render('index')
    })
    .catch(error => console.log('error'))
})

router.get('/:shortener', (req, res) => {
  const shortener = req.params.shortener
  return UrlRecord.find({ shortener: shortener })
    .lean()
    .then(result => {
      res.redirect(`${result[0].link}`)
    })
    .catch(error => console.log('error!'))
})

router.post('/generate', (req, res) => {
  const link = req.body.name
  const shortener = randomUrl
  const urlRecord = new UrlRecord({ link, shortener })
  return urlRecord.save()
    .then(() => res.render('generate', { link, shortener }))
})

module.exports = router