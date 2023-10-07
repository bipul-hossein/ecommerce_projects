const User = require("../models/userModel");
const { successResponse } = require("./responseController");

const handleCreateUser = async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await User.create(data);
    return successResponse(res, {
      statusCode: 200,
      message: "User Created Successfully",
      payload: newUser,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetUser = async (req, res, next) => {
  try {
    const { email } = req.query;
    const getUser = await User.findOne({ email: email }).lean();
    return successResponse(res, {
      statusCode: 200,
      message: "User Get Successfully",
      payload: getUser,
    });
  } catch (error) {
    next(error);
  }
};

const handleUpdateUser = async (req, res, next) => {
  try {
    const { email } = req.query;
    console.log(email,"find email");
    const { userFirstName, userLastName, userEmail, userPhoneNumber } =
      req.body;
    console.log( userFirstName, userLastName, userEmail, userPhoneNumber);
    const filter = { email: email };
    const updates = {
      $set: {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        phone: userPhoneNumber,
      },
    };
    const option = {
      new: true,
    };
     const updateUser = await User.findOneAndUpdate(
       filter,
       updates,
       option
     );

    return successResponse(res, {
      statusCode: 200,
      message: "User Update Successfully",
      payload: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateUser,
  handleGetUser,
  handleUpdateUser,
};
