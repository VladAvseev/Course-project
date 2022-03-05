const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/login', authController.login);
authRouter.post('/registration', authController.registration);

module.exports = authRouter;