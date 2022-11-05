const express = require('express')
const router = express.Router()

const AuthControllers = require('../../controllers/authController')

router.route('/')
.post(AuthControllers.handleLogin)

module.exports = router