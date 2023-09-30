const Category = require("../models/categoryModel");
const { successResponse } = require("./responseController");
const slugify = require("slugify");
const createError = require("http-errors");
// create category function
const handleCreateCategories = async (req, res, next) => {
  try {
    // step 1: get the data from request
    const { title } = req.body;
    console.log(title);
    // step 2: save to database with create function
    const newCategory = await Category.create({
      title: title,
      slug: slugify(title),
    });
    // send response to FontEnd and thought response controller
    return successResponse(res, {
      statusCode: 200,
      message: "Category was created successfully",
      payload: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

// get categories function
const handleGetCategories = async (req, res, next) => {
  try {
    const getCategories = await Category.find({}).select("title slug").lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Category return successfully",
      payload: getCategories,
    });
  } catch (error) {
    next(error);
  }
};

// get single category function
const handleGetCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const getCategory = await Category.findOne({ slug })
      .select("title slug")
      .lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Category return successfully",
      payload: getCategory,
    });
  } catch (error) {
    next(error);
  }
};

// Update a single category function
const handleUpdateCategory = async (req, res, next) => {
  try {
    const { title } = req.body;
    const { slug } = req.params;
    const filter = { slug };
    const updates = { $set: { title: title, slug: slugify(title) } };
    const option = {
      new: true,
    };
    const updateCategory = await Category.findOneAndUpdate(
      filter,
      updates,
      option
    );

    if (!updateCategory) {
      throw createError(404, "Category not found");
    }
    return successResponse(res, {
      statusCode: 201,
      message: "Category updated successfully",
      payload: updateCategory,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a single category function
const handleDeleteCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const deleteCategory = await Category.findOneAndDelete({ slug });
    if (!deleteCategory) {
      throw createError(404, "Category not found");
    }
    return successResponse(res, {
      statusCode: 201,
      message: "Category Deleted successfully",
      payload: deleteCategory,
    });
  } catch (error) {
    next(error);
  }
};

// exports handleCreateCategory to reuse from category routes
module.exports = {
  handleCreateCategories,
  handleGetCategories,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory,
};
