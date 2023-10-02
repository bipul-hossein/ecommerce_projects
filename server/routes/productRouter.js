const express = require('express');
const { handleCreateProducts, handleGetProducts, handleGetCategoryProducts, handleGetProduct, handleUpdateProduct, handleDeleteProduct } = require("../controllers/productsController");
const productRouter = express.Router();

//POST:api/products
productRouter.post('/', handleCreateProducts);

//Get:api/products all product
productRouter.get('/', handleGetProducts);

//Get:api/id --category wise all product by category id
productRouter.get('/category/:id', handleGetCategoryProducts);

//Get:api/id single product by product id
productRouter.get('/:id', handleGetProduct);

//Put:api/id update a single product by product id
productRouter.put('/:id', handleUpdateProduct);

//Put:api/id delete a single product by product id
productRouter.delete('/:id', handleDeleteProduct);


module.exports = productRouter;