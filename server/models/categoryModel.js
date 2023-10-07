const { mongoose, Schema } = require("mongoose");

const categorySchema = new Schema({
  title: {
    type: String,
    required: [true, "category title is required"],
    trim: true,
    minlength: [3, "category title must be at least 3 characters"],
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
