const fs = require('fs')
const path = require('path')
// import { readFile } from 'node:fs'

// fs.readFile('./FileSystem/test1.txt', 'utf8', (err, data) => {
fs.readFile(path.join(__dirname, 'read.txt'), 'utf-8', (err, data) => {
  if (err) throw err
  console.log('data=', data) //toString
})

fs.writeFile(path.join(__dirname, 'write.txt'), 'Write content', (err) => {
  if (err) throw err
  console.log('write complete') //toString

  fs.appendFile(path.join(__dirname, 'write.txt'), 'Append1 content \n', (err) => {
    if (err) throw err
    console.log('Append1 complete') //toString

    fs.rename(path.join(__dirname, 'write.txt'), path.join(__dirname, 'renamed.txt'), (err) => {
      if (err) throw err
      console.log('Renamed')
    })
  })
})


process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})