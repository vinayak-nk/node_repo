const express = require('express')
const path = require('path')

const router = express.Router()


router.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
}) // regEx: begining or end (/), html is optional

router.get('/test(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
}) // regEx: begining or end (/), html is optional


module.exports = router