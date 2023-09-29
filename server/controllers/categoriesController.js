const Category = require("../models/categoryModel");
const { successResponse } = require("./responseController");
const slugify = require('slugify')
// create category function
const handleCreateCategory = async (req, res, next) => {
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

// get category function
const handleGetCategory = async (req, res, next) => {
    try {
        // step 1: get the data from request
        const { title } = req.body;
        // step 2: get data with find method
        // select - only get title, slug field
        // lean -return javascript object
        const getCategory = await Category.find({}).select('title slug').lean()
     
        // send response to FontEnd and thought response controller
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
module.exports = { handleCreateCategory,handleGetCategory }; 