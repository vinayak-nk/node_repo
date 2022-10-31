const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'lorem.html'), { encoding: 'utf-8' })
const ws = fs.createWriteStream(path.join(__dirname, 'new-lorem.html'))

// rs.on('data', dataChunk => {
//   ws.write(dataChunk)
// })

rs.pipe(ws)