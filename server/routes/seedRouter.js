const express = require('express');
const { seedProducts } = require('../controllers/seedController');
const seedRouter = express.Router();

seedRouter.get("/", seedProducts);

module.exports = seedRouter;