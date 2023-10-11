const { mongoose, Schema } = require("mongoose");


const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    require: true
  },
  slug: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    trim: true,
    require: true
  },
  price: {
    type: Number,
    trim: true,
    require: true
  },
  stock: {
    type: Number,
    trim: true,
    require: true
  },
  sold: {
    type: Number,
    trim: true,
    default: 0,
    require: true
  },
  shipping: {
    type: Number,
    default: 0, 
    require: true
  },
  image: {
    type: String,
    require: true
  },
  categoryId: {
    type: String,
    ref: "Category",
    require: true
  },
  categoryName: {
    type: String,
    ref: "Category",
    require: true
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;