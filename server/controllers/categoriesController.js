const Category = require("../models/categoryModel");
const { successResponse, errorResponse } = require("./responseController");
const slugify = require("slugify");
const createError = require("http-errors");
// create category function
const handleCreateCategories = async (req, res, next) => {
  try {
    const { title } = req.body;
    // const image = req.body;
    // console.log(image);
    const newCategory = await Category.create({
      title: title,
      slug: slugify(title),
      // image: image,
    });
    return successResponse(res, {
      statusCode: 200,
      message: "Category was created successfully",
      payload: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetCategories = async (req, res, next) => {
  try {
    const getCategories = await Category.find({}).select("title slug").lean();
    if (getCategories?.length) {
      return successResponse(res, {
        statusCode: 200,
        message: "Category return successfully",
        payload: getCategories,
      });
    } else {
      return errorResponse(res, {
        statusCode: 500,
        message: "not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

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

module.exports = {
  handleCreateCategories,
  handleGetCategories,
  handleGetCategory,
  handleUpdateCategory,
  handleDeleteCategory,
};
