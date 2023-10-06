const express = require("express");
const {
  handleCreateCategories,
  handleGetCategories,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory,
} = require("../controllers/categoriesController");
const upload = require("../middleware/uploadFile");
const categoryRouter = express.Router();

//POST /categories # create category
categoryRouter.post("/", /* upload.single("image") */ handleCreateCategories);

// Get /category # read category
categoryRouter.get("/", handleGetCategories);

// Get /category # read category
categoryRouter.get("/:slug", handleGetCategory);

// Put /category # update category
categoryRouter.put("/:slug", handleUpdateCategory);

// Delete /category # delete category
categoryRouter.delete("/:slug", handleDeleteCategory);

module.exports = categoryRouter;
