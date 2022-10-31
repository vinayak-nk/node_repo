const cors = require('cors')

const whitelist = ['http://127.0.0.1:5500', 'http://localhost:3500', 'https://www.google.com']
const corsOptions = {
  origin: (origin, callback) => {
    // !origin === undefined
    if (whitelist.indexOf(origin) !== -1 || !origin) { 
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

const corsFn = cors(corsOptions)

module.exports = corsFn