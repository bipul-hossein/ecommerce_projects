const express = require('express');
const ordersRouter = express.Router();
const Orders = require('../models/ordersModal');

ordersRouter.put('/order', async(req, res, next) => {
  const { userEmail, orders } = req.body;
  console.log(userEmail, orders);
  const newOrders = await Orders.create({userEmail, orders})
  res.status(201).json(newOrders)
});
ordersRouter.get('/order', async(req, res, next) => {
  const userEmail = req.query.email;

  const newOrders = await Orders.findOne({ userEmail})
  res.status(201).json(newOrders)
});

module.exports = ordersRouter;