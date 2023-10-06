const User = require("../models/userModel");
const { successResponse } = require("./responseController");

const handleCreateUser = async(req, res, next) => {
    try {
        const data = req.body;
        const newUser = await User.create(data)
        return successResponse(res, {
            statusCode: 200,
            message: "User Created Successfully",
            payload: newUser,
          });
    } catch (error) {
        next(error)        
    }
    
};

module.exports = {handleCreateUser};