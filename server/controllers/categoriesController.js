const Category = require("../models/categoryModel");
const { successResponse } = require("./responseController");
const slugify = require('slugify')
// create category function
const handleCreateCategories = async (req, res, next) => {
    try {
        // step 1: get the data from request
        const { title } = req.body;
        // step 2: save to database with create function
        const newCategory = await Category.create({
            title: title,
            slug: slugify(title),
        })
        // send response to FontEnd and thought response controller
        return successResponse(res, {
            statusCode: 200,
            message: "Category was created successfully",
            payload: newCategory,
        })
    } catch (error) {
        next(error)
    }
};

// get categories function
const handleGetCategories = async (req, res, next) => {
    try {
        const getCategories = await Category.find({}).select('title slug').lean()

        return successResponse(res, {
            statusCode: 200,
            message: "Category return successfully",
            payload: getCategories,
        })
    } catch (error) {
        next(error)
    }
};

// get single category function
const handleGetCategory = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const getCategory = await Category.findOne({slug}).select('title slug').lean()

        return successResponse(res, {
            statusCode: 200,
            message: "Category return successfully",
            payload: getCategory,
        })
    } catch (error) {
        next(error)
    }
};

// exports handleCreateCategory to reuse from category routes
module.exports = { handleCreateCategories, handleGetCategories, handleGetCategory }; 