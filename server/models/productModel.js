const { mongoose, Schema } = require("mongoose");

// title, slug,description,price,quantity,sold,shipping,image
const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "product title is required"],
    trim: true,
    minlength: [3, "product title must be at least 3 characters"],
    maxlength: [50, "product title must be at maxlength 50 characters"],
  },
  slug: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: [true, "description title is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
    trim: true,
    validate: {
      validator: (v) => v > 0,
      message: (props) => {
        `${props.value} is not a valid price! Price must be greater than 0`;
      },
    },
  },
  stock: {
    type: Number,
    required: [true, "product quantity is required"],
    trim: true,
    validate: {
      validator: (v) => v > 0,
      message: (props) => {
        `${props.value} is not a valid quantity! Quantity must be greater than 0`;
      },
    },
  },
  sold: {
    type: Number,
    required: [true, "sold quantity is required"],
    trim: true,
    default: 0,
    validate: {
      validator: (v) => v > 0,
      message: (props) => {
        `${props.value} is not a valid sold! Sold must be greater than 0`;
      },
    },
  },
  shipping: {
    type: Number,
    default: 0, //shipping free 0 or paid something amount
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
