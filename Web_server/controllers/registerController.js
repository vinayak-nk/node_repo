const userDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
  console.log('handleNewUser')
  const { username, pwd } = req.body
  if (!username || !pwd) return res.status(400).json({ "message": "Username and password are required" })

  //Check for duplicates userr in DB
  const duplicate = userDB.users.find(user => user.username === username)
  if (duplicate) return res.sendStatus(409)
  // if (duplicate) return res.status(409).json({ "message": 'Username already exists' })

  try {
    //encrypt password
    const hashedPwd = await bcrypt.hash(pwd, 10)
    //Store new user
    const newUser = { 'username': username, 'password': hashedPwd}
    userDB.setUsers([...userDB.users, newUser])
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(userDB.users)
    );
    console.log('users', userDB.users)
    res.status(201).json({ 'message': 'New user added' })
  } catch (error) {
    console.log('Error=', error)
    return res.status(500).json({ 'message': error.message })
  }
}

module.exports = { handleNewUser }