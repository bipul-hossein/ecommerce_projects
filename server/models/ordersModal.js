// const {mongoose, Schema } = require("mongoose");

// const ordersSchema = new Schema({
//     userEmail: {
//         type: String,
//         required: true
//     },
//     orders: {
//         type: Array,
//         required: true
//     }
// });

// const Orders = mongoose.model("Orders", ordersSchema);
// module.exports = Orders;





const {mongoose, Schema } = require("mongoose");

const ordersSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    orders:  [{
        id: Schema.ObjectId,
        quantity: Number
      }],
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;