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
        id: Number,
        quantity: Number
      }]
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;