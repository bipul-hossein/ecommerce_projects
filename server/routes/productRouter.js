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
    return cb(null, "./uploads");
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
}).single("file");

//POST:api/products
productRouter.post("/", upload, handleCreateProducts);

//Get:api/products all product
productRouter.get("/", handleGetProducts);

//Get:api/id --category wise all product by category id
productRouter.get("/category/:id", handleGetCategoryProducts);

//Get:api/id single product by product id
productRouter.get("/:id", handleGetProduct);

//Put:api/id update a single product by product id
productRouter.put("/:id", handleUpdateProduct);

//Put:api/id delete a single product by product id
productRouter.delete("/:id", handleDeleteProduct);

module.exports = productRouter;
