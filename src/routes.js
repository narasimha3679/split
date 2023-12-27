const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

// Change login route to POST
router.post('/login', userController.loginUser);

// Keep registration route as POST
router.post('/registration', userController.registerUser);

module.exports = router;
