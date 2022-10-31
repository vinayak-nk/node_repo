const { logEvents } = require('./logEvent')

exports.errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errorLog.txt')
  console.log('Error STACK', err.stack)
  res.status(500).send(err.message)
}

// module.exports = { errorHandler }
