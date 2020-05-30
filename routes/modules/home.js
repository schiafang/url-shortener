const express = require('express')
const router = express.Router()
const UrlRecord = require('../../models/urlRecord')
const randomUrl = require('../../public/javascripts/random')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:shortener', (req, res) => {
  const shortener = req.params.shortener
  return UrlRecord.find({ shortener: shortener })
    .lean()
    .then(result => {
      // 若輸入網址不在資料庫中則導回首頁
      if (result.length === 0) { res.redirect('/') }
      else { res.redirect(`${result[0].link}`) }
    })
    .catch(error => console.log('error!'))
})

router.post('/generate', (req, res) => {
  const link = req.body.name
  let randomShortener = randomUrl()
  UrlRecord.find({ shortener: randomShortener })
    .then(item => {
      function check (item) {
        if (item.length !== 0) {
          randomShortener = randomUrl()
        }
      }
      check(item)
    })
    .then(() => {
      return UrlRecord.create({ link, shortener: randomShortener })
    })
    .then(() => {
      res.render('generate', { link, randomShortener })
    })
    .catch(error => console.log('error'))
})

module.exports = router