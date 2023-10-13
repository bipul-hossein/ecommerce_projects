const Product = require("../models/productModel");
const { successResponse } = require("./responseController");
const slugify = require("slugify");
const createError = require("http-errors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const uploadsDirectory = "uploads";


const handleCreateProducts = async (req, res, next) => {
  try {
    const image = req?.file?.filename;
    const { title, description, price, quantity, shipping, category, sold } =
      req.body;

    const newProduct = await Product.create({
      title,
      slug: slugify(title),
      description,
      price,
      stock: quantity,
      shipping,
      category,
      sold,
      image: `${process.env.SERVER_URL}/uploads/${image}`,
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
    const { id } = req.params;
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
    const { id } = req.params;
    const getProduct = await Product.findOne({ _id: id }).lean();

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
    const image = req?.file?.filename;
    const { title, description, price, quantity, shipping, category, sold } =
      req.body;

    if (image) {
      const findImage = await Product.findById({ _id: id });
      const oldImage = findImage?.image?.split("/")[4];
      const imagePath = path.join(uploadsDirectory, oldImage);

      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error(`Error deleting ${oldImage}:`, err);
          } else {
            console.log(`${oldImage} has been deleted.`);
          }
        });
      } else {
        console.log(`${oldImage} does not exist in the "uploads" directory.`);
      }
    }

    const filter = { _id: id };
    const filedWithImage = {
      $set: {
        title,
        slug: slugify(title),
        description,
        price,
        quantity,
        shipping,
        category,
        sold,
        image: `${process.env.SERVER_URL}/uploads/${image}`,
      },
    };
    const filedWithOutImage = {
      $set: {
        title: title,
        slug: slugify(title),
        description,
        price,
        quantity,
        shipping,
        category,
        sold,
      },
    };

    const option = {
      new: true,
    };
    const updateProduct = await Product.findOneAndUpdate(
      filter,
      image ? filedWithImage : filedWithOutImage,
      option
    );
    if (!updateProduct) {
      res.status(404).json({ message: "Product not Updated" });
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
    } else{
      const oldImage = deleteProduct?.image?.split("/")[4];
      const imagePath = path.join(uploadsDirectory, oldImage);

      if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error(`Error deleting ${oldImage}:`, err);
          } else {
            console.log(`${oldImage} has been deleted.`);
          }
        });
      } else {
        console.log(`${oldImage} does not exist in the "uploads" directory.`);
      }
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
