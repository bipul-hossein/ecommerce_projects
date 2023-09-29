const { mongoose, Schema } = require('mongoose');

const categorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'post title is required'],
        minlength: [3, 'post title must be atleast 3 characters']
    },
    slug: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
