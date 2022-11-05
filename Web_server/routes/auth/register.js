const express = require('express');
const router = express.Router();

const userControllers = require('../../controllers/registerController')

router.route('/')
.post(userControllers.handleNewUser)

module.exports = router