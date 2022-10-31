// import { format } from 'date-fns'
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises

// console.log(format(new Date(), 'yyyyMMdd--HH:mm:ss'))
// console.log(`UUID=>${uuid()}`)

const logEvents = async (mesaage) => {
  const dateTime = format(new Date(), 'yyyyMMdd--HH:mm:ss')
  const logItem = `${dateTime}\t ${uuid()}\t${mesaage}\n`
  console.log(logItem)

  try {
    if(!fs.existsSync(path.join(__dirname, 'logs'))){
      await fsPromises.mkdir('./logs')
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'event.txt'), logItem)
  } catch (error) {
    console.log(error)
  }
}

module.exports = logEvents