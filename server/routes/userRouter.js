const express = require('express');
const { handleCreateUser, handleGetUser, handleUpdateUser, handleCreateAddress, handleGetAddress, handleGetAllUser,handleJWT,verifyJWT, handleCreateFaq, handleAllGetFaq, handleGetFaq, handleUpdateFaq, handleDeleteFaq } = require('../controllers/userController');
//const { handleGetUserOrders } = require('../controllers/ordersController');
const userRouter = express.Router();

userRouter.get('/jwt', handleJWT);

userRouter.post('/user', handleCreateUser);

userRouter.get('/users', handleGetAllUser);

userRouter.get('/user', handleGetUser);

userRouter.put('/user', handleUpdateUser);

userRouter.put('/user/address', handleCreateAddress);

userRouter.get('/user/address',verifyJWT, handleGetAddress);

//faq
userRouter.post('/faq',handleCreateFaq);
userRouter.get('/faqs',handleAllGetFaq);
userRouter.get('/faq/:id',handleGetFaq);
userRouter.put('/faq/:id',handleUpdateFaq);
userRouter.delete('/faq/:id',handleDeleteFaq);

module.exports = userRouter;