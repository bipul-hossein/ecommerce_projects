const express = require('express');
const { handleCreateCategories, handleGetCategories, handleGetCategory } = require("../controllers/categoriesController");
const categoriesRouter = express.Router();

//POST /categories # create category
categoriesRouter.post('/', handleCreateCategories);

// Get /category # read category
categoriesRouter.get('/', handleGetCategories);

// Get /category # read category
categoriesRouter.get('/:slug', handleGetCategory);

module.exports = categoriesRouter;