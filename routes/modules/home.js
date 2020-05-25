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
  let randomShortener = randomUrl()
  /**
   * 1. 先找出資料庫有無重複的shortener(將會有兩個一樣的網址連上不同網站)，如果有則返回再執行一次 random function
   * 2. 將新資料存入資料庫
   * 3. 渲染頁面
   */
  UrlRecord.find({ shortener: randomShortener })
    .then(item => {
      if (item.length !== 0) return randomShortener = randomUrl()
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