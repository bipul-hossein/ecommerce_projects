const express = require("express");
const {
  handleCreateCategories,
  handleGetCategories,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory,
} = require("../controllers/categoriesController");
const categoryRouter = express.Router();

//POST /categories # create category
categoryRouter.post("/categories", handleCreateCategories);

// Get /category # read category
categoryRouter.get("/categories", handleGetCategories);

// Get /category # read category
categoryRouter.get("/categories/:slug", handleGetCategory);

// Put /category # update category
categoryRouter.put("/categories/:slug", handleUpdateCategory);

// Delete /category # delete category
categoryRouter.delete("/categories/:slug", handleDeleteCategory);

module.exports = categoryRouter;
