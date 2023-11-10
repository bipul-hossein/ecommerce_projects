const express = require("express");
const multer = require("multer");
const {
  handleGetProducts,
  handleGetCategoryProducts,
  handleGetProduct,
  handleUpdateProduct,
  handleDeleteProduct,
  handleCreateProducts,
} = require("../controllers/productsController");

const productRouter = express.Router();

// Image upload with multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
  return cb(
      null,
      file.fieldname + "_" + Date.now() + "_" + file.originalname
    );
  },
});

const upload = multer({
  storage: storage,
})

//POST:api/products
productRouter.post("/products", upload.single("file") , handleCreateProducts);

//Get:api/products all product
productRouter.get("/products", handleGetProducts);

//Get:api/id --category wise all product by category id
productRouter.get("/products/category/:slug", handleGetCategoryProducts);

//Get:api/id single product by product id
productRouter.get("/products/:id", handleGetProduct);

//Put:api/id update a single product by product id
productRouter.put("/products/:id",upload, handleUpdateProduct);

//Put:api/id delete a single product by product id
productRouter.delete("/products/:id", handleDeleteProduct);

module.exports = productRouter;
