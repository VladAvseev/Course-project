const express = require('express');
const userController = require('../controllers/userController')
const authController = require("../controllers/authController");
const userRouter = express.Router();

userRouter.post('/delete', userController.deleteUser);
userRouter.post('/role', userController.changeRole);
userRouter.post('/getUser', userController.getUser);
userRouter.get('/users', userController.getUsers);

module.exports = userRouter;