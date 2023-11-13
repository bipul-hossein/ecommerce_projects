const express = require('express');
const { seedProducts, seedFaq } = require('../controllers/seedController');
const seedRouter = express.Router();

seedRouter.get("/seed/products", seedProducts);
seedRouter.get("/seed/faq", seedFaq);

module.exports = seedRouter;