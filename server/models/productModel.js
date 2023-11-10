const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    require: true,
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
    require: true,
  },
  price: {
    type: Number,
    trim: true,
    require: true,
  },
  stock: {
    type: Number,
    trim: true,
    require: true,
  },
  sold: {
    type: Number,
    trim: true,
    default: 0,
  },
  shipping: {
    type: Number,
    default: 0,
  },
  image: {
    data: Buffer,
    contentType: String,
    // require: true
  },
  category: {
    type: String,
    ref: "Category",
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
