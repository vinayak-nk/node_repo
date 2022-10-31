const logEvents = require('./logEvent')

const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitterObj = new MyEmitter()

myEmitterObj.on('log', (msg) => logEvents(msg))

setTimeout(() => myEmitterObj.emit('log', `Log event emitter - ${new Date()}`), 2 * 1000)

// logEvents('test')

process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})