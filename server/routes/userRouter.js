const express = require('express');
const { handleCreateUser, handleGetUser, handleUpdateUser } = require('../controllers/userController');
const { handleGetUserOrders } = require('../controllers/ordersController');
const userRouter = express.Router();

userRouter.post('/user', handleCreateUser);

userRouter.get('/user', handleGetUser);

userRouter.put('/user', handleUpdateUser);

module.exports = userRouter;