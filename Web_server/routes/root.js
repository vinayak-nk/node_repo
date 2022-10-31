const path = require('path')
const express = require('express')
const router = express.Router()


// app.get('/', (req, res) => {
//   // res.send('Hello')
//   // res.sendFile(path.join(__dirname,'./views/index.html'))
//   res.sendFile('./views/index.html', { root: __dirname })
// })

// app.get('^/$|index(.html)?', (req, res) => {res.send('RegEx')}) // regEx: begining or end (/), html is optional
router.get('^/$|index(.html)?', (req, res) => {res.sendFile(path.join(__dirname,'../views/index.html'))}) // regEx: begining or end (/), html is optional

router.get('^/new(.html)?', (req, res) => { res.sendFile(path.join(__dirname,'../views/new-page.html'))})

router.get('/old', (req, res) => { res.redirect(301, '/new')}) // from old to redirect to new

// Route Handlers
// app.get('/hello(.html)?', (req, res, next) => {
//   console.log('next 1')
//   next()
// }, (req, res) => {
//   res.send('Next Done')
// })


module.exports = router