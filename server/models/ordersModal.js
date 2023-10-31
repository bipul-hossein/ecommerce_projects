const {mongoose, Schema } = require("mongoose");

const ordersSchema = new Schema({
    userEmail: {
        type: String,
    },
    orders:  [{
        id: Schema.ObjectId,
        quantity: Number
      }],
    userInfo: {
      
    },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;