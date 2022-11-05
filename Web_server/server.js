const express = require('express')
const path = require('path')

const { logger } = require('./middleware/logEvent')
const { errorHandler } = require('./middleware/errorHandler')
const cors = require('./config/corsOptions')

const app = express()
const PORT = process.env.port || 3500

app.use(logger) // Custom Middleware
app.use(cors) // CORS
// Built-in Middlewares
app.use(express.urlencoded({ extended: false })) 
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))
app.use('/subdir', express.static(path.join(__dirname, '/public')))

// ROUTES
app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'))
app.use('/employees', require('./routes/api/employees'))
app.use('/users', require('./routes/auth/register'))
app.use('/auth', require('./routes/auth/auth'))
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname,'./views/404.html'))
  }
  else if (req.accepts('json')) {
    res.json({ error: "404 NOT FOUND" })
  } else {
    res.type('txt').send("404 Not Found")
  }
})
// app.get('/*', (req, res) => { res.status(404).sendFile(path.join(__dirname,'./views/404.html'))}) // default
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server on port: ${PORT}`))

// UNCAUGHT ERRORS
process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})