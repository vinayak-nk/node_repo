const userDB = {
  users: require('../model/users.json')
}

const bcrypt = require('bcrypt')

const handleLogin = async (req, res) => {
  const { username, pwd } = req.body

  if (!username || !pwd) return res.status(400).json({ "message": "Username and password are required" })
  const foundUser = userDB.users.find(user => user.username === username)
  if (!foundUser) return res.sendStatus(401).json({ "message": "Username not found in DB" }) // 401 = unauthorised

  const match = await bcrypt.compare(pwd, foundUser.password)
  if (match) return res.status(201).json({ 'Success': 'Logged in' })
  res.status(401).json({ 'message': 'User not found' })
}

module.exports = { handleLogin }