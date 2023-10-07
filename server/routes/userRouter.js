const express = require('express');
const { handleCreateUser } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.post('/user', handleCreateUser);

module.exports = userRouter;