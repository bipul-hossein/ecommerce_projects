// const Product = require("../models/productModel");
// const Orders = require("../models/ordersModal");

// const handleNewOrders = async (req, res, next) => {
//   const { userEmail, orders } = req.body;
//   const newOrders = await Orders.create({ userEmail, orders });
//   res.status(201).json(newOrders);
// };

// const handleGetUserOrders = async (req, res, next) => {
//   const userEmail = req.query.email;
//   let userOrders = [];

//   try {
//     const result = await Orders.findOne({ userEmail });

//     if (result) {
//       for (let i = 0; i < result.orders.length; i++) {
//         const order = result.orders[i];
//         const idMeal = order.id;

//         const product = await Product.findOne({ idMeal });
//         const newp = { name: "jubay", id: 2 };
//         // Add data to singleOrder
//         const singleOrder = { ...newp, quantity: order.quantity };

//         // Add the singleOrder to userOrders
//         userOrders[i] = singleOrder;
//       }

//       console.log(userOrders);
//       res.status(200).json(userOrders);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = { handleNewOrders, handleGetUserOrders };
















const Product = require("../models/productModel");
const Orders = require("../models/ordersModal");
const { successResponse } = require("./responseController");

const handleNewOrders = async (req, res, next) => {
  try {
    const { userEmail, orders } = req.body;
    const orderDetails = { userEmail, orders }
    const findUser = await Orders.findOne({ userEmail });

    if (!findUser) {
      const newOrders = await Orders.create(orderDetails);

      return successResponse(res, {
        statusCode: 200,
        message: "Order Successfully Completed",
        payload: newOrders,
      });
    } else {
      const result = await Orders.findOneAndUpdate(
        { userEmail },
        { $push: { orders } },
        { new: true }
      );
      return successResponse(res, {
        statusCode: 200,
        message: "Order Successfully Completed",
        payload: result,
      });
    }
  } catch (error) {
    next(error);
  }
};




const handleGetUserOrders = async (req, res, next) => {
  const userEmail = req.query.email;
  let userOrders = [];

  try {
    const result = await Orders.findOne({ userEmail });
    if (result) {
      for (let i = 0; i < result.orders.length; i++) {
        const order = result.orders[i];
        const id = order?.id;
        

        const product = await Product.findOne({ _id: id});
        // Add data to singleOrder
        const singleOrder = { ...product, quantity: order.quantity };
        // Add the singleOrder to userOrders
        userOrders[i] = singleOrder;
      }
      
      return successResponse(res, {
        statusCode: 200,
        message: "User Orders",
        payload: userOrders,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { handleNewOrders, handleGetUserOrders };

