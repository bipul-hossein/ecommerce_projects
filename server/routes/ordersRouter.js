const express = require('express');
const ordersRouter = express.Router();
const { handleNewOrders, handleGetUserOrders } = require('../controllers/ordersController');

ordersRouter.put('/order', handleNewOrders);


ordersRouter.get('/order', handleGetUserOrders);

module.exports = ordersRouter;