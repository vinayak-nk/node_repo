// const fs = require('fs');
// const fsPromises = fs.promises;
const fsPromises = require('fs').promises;
const { unlink } = require('fs');
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'read.txt'), 'utf8')
    console.log('Read Completed : ', data)
    await fsPromises.unlink(path.join(__dirname, 'read.txt'))
    await fsPromises.writeFile(path.join(__dirname, 'writePromise.txt'), data)
    console.log('Write Completed : ')
    await fsPromises.appendFile(path.join(__dirname, 'writePromise.txt'), '\nappend')
    console.log('Append Completed : ')
    await fsPromises.rename(path.join(__dirname, 'writePromise.txt'), path.join(__dirname, 'renamedPromise.txt'))
    console.log('Rename Completed : ')
    const newData = await fsPromises.readFile(path.join(__dirname, 'renamedPromise.txt'), 'utf8')
    console.log('Read Completed : ', newData)

  } catch (error) {
    console.log(error) 
  }
}

fileOps()
