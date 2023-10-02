const Product = require("../models/productModel");
const { successResponse } = require("./responseController");
const slugify = require("slugify");
const createError = require("http-errors");
// create product function
const handleCreateProducts = async (req, res, next) => {
  try {
    // step 1: get the data from request
    const { title, description, price, quantity, shipping, category, sold, image } = req.body;
    console.log(req.body);
    // step 2: save to database with create function
    const newProduct = await Product.create({
      title: title,
      slug: slugify(title),
      description,
      price,
      quantity,
      shipping,
      category,
      sold,
      image

    });
    return successResponse(res, {
      statusCode: 200,
      message: "Product was created successfully",
      payload: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetProducts = async (req, res, next) => {
  try {
    const getProducts = await Product.find({}).lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Product return successfully",
      payload: getProducts,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetCategoryProducts = async (req, res, next) => {
  try {
    const { id } = req.params
    const getProducts = await Product.find({ category: id }).lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Product return successfully",
      payload: getProducts,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetProduct = async (req, res, next) => {
  try {

    const { id } = req.params
    const getProduct = await Product.find({ _id: id }).lean();

    return successResponse(res, {
      statusCode: 200,
      message: "Product return successfully",
      payload: getProduct,
    });
  } catch (error) {
    next(error);
  }
};


const handleUpdateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id, req.body);
    const { title, description, price, quantity, shipping, category, sold, image } = req.body;
    const filter = { _id: id };
    const updateField = {
      $set: {
        title: title,
        slug: slugify(title),
        description,
        price,
        quantity,
        shipping,
        category,
        sold,
        image
      }
    };
    const option = {
      new: true,
    };
    const updateProduct = await Product.findOneAndUpdate(
      filter,
      updateField,
      option
    );
    if (!updateProduct) {
      throw createError(404, "Product not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "Product updated successfully",
      payload: updateProduct,
    });
  } catch (error) {
    next(error);
  }
};

const handleDeleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    if (!deleteProduct) {
      throw createError(404, "Product not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "Product delete successfully",
      payload: deleteProduct,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  handleCreateProducts,
  handleGetProducts,
  handleGetCategoryProducts,
  handleGetProduct,
  handleUpdateProduct,
  handleDeleteProduct,

};
