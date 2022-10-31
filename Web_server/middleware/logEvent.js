// import { format } from 'date-fns'
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises

// console.log(format(new Date(), 'yyyyMMdd--HH:mm:ss'))
// console.log(`UUID=>${uuid()}`)

const logEvents = async (mesaage, fileName) => {
  const dateTime = format(new Date(), 'yyyyMMdd--HH:mm:ss')
  const logItem = `${dateTime}\t ${uuid()}\t${mesaage}\n`
  console.log(logItem)

  try {
    if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
    }
    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', fileName), logItem)
  } catch (error) {
    console.log(error)
  }
}

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}\t${new Date()}`, 'reqLog.txt')
  console.log(`vk ${req.method} ${req.path}`)
  next()
}

module.exports = { logEvents, logger }