const { mongoose, Schema } = require("mongoose");

const faqSchema = new Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
    trim: true,
  },
  answer: {
    type: String,
    required: [true, "Answer is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserFaq = mongoose.model("faq", faqSchema);
module.exports = UserFaq;
