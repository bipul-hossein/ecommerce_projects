const express = require('express');
const { handleCreateUser, handleGetUser, handleUpdateUser, handleCreateAddress, handleGetAddress } = require('../controllers/userController');
const { handleGetUserOrders } = require('../controllers/ordersController');
const userRouter = express.Router();

userRouter.post('/user', handleCreateUser);

userRouter.get('/user', handleGetUser);

userRouter.put('/user', handleUpdateUser);

userRouter.put('/user/address', handleCreateAddress);

userRouter.get('/user/address', handleGetAddress);

module.exports = userRouter;