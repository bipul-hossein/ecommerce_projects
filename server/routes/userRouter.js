const express = require("express");
const {
  handleCreateUser,
  handleGetUser,
  handleUpdateUser,
  handleCreateAddress,
  handleGetAddress,
  handleGetAllUser,
  handleJWT,
  verifyJWT,
  handleCreateFaq,
  handleAllGetFaq,
  handleGetFaq,
  handleUpdateFaq,
  handleDeleteFaq,
  handleGetAdmin,
} = require("../controllers/userController");
const { isAdmin } = require("../middlewares/isAdmin");
//const { handleGetUserOrders } = require('../controllers/ordersController');
const userRouter = express.Router();

userRouter.get("/jwt", handleJWT);

userRouter.get("/users/admin/:email",verifyJWT, handleGetAdmin);

userRouter.get("/users",verifyJWT,isAdmin, handleGetAllUser);

userRouter.get("/user", handleGetUser);

userRouter.get("/user/address", verifyJWT, handleGetAddress);

userRouter.put("/user", handleUpdateUser);

userRouter.put("/user/address", handleCreateAddress);

userRouter.post("/user", handleCreateUser);


//faq
userRouter.post("/faq", handleCreateFaq);
userRouter.get("/faqs", handleAllGetFaq);
userRouter.get("/faq/:id", handleGetFaq);
userRouter.put("/faq/:id", handleUpdateFaq);
userRouter.delete("/faq/:id", handleDeleteFaq);

module.exports = userRouter;
