const express = require('express');
const { handleCreateCategory, handleGetCategory } = require("../controllers/categoriesController");
const categoriesRouter = express.Router();

//POST /categories # create category
categoriesRouter.post('/', handleCreateCategory);
 
// Get /category # read category
categoriesRouter.get('/', handleGetCategory);

module.exports = categoriesRouter;