// Import required modules
const data = require('../data/data');
const UserFaq = require('../models/faqModel');
const Product = require('../models/productModel');
const { successResponse } = require('./responseController');


// Rename function to better describe its purpose and use camelCase for consistency
const seedProducts = async (req, res, next) => {
  try {
    // Delete all existing products
  // await Product.deleteMany({});

    // Create new product
    const products = await Product.insertMany(data.products);

    // Return a successful response with the created products
    return successResponse(res, {
      statusCode: 201,
      message: 'products created successfully', // Improve message readability
      payload: products,
    });
  } catch (error) {
    // Forward the error to the error handling middleware
    next(error);
  }
};
const seedFaq = async (req, res, next) => {
  try {
    // Delete all existing products
  // await Product.deleteMany({});

    // Create new product
    const faq = await UserFaq.insertMany(data.faq);

    // Return a successful response with the created products
    return successResponse(res, {
      statusCode: 201,
      message: 'faq created successfully', // Improve message readability
      payload: faq,
    });
  } catch (error) {
    // Forward the error to the error handling middleware
    next(error);
  }
};

// Export the function
module.exports = { seedProducts,seedFaq };