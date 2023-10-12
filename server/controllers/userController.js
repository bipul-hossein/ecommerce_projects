const User = require("../models/userModel");
const { successResponse } = require("./responseController");

const handleCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    console.log(firstName, lastName, email);
    const data = {
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
    };
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
const handleGetAllUser = async (req, res, next) => {
  try {
    const getAllUser = await User.find({}).lean();
    return successResponse(res, {
      statusCode: 200,
      message: "User Get Successfully",
      payload: getAllUser,
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
    const { userFirstName, userLastName, userEmail, userPhoneNumber } =
      req.body;
    console.log(userFirstName, userLastName, userEmail, userPhoneNumber);
    const filter = { email: email };
    const updates = {
      $set: {
        name: {
          firstName: userFirstName,
          lastName: userLastName,
        },
        email: userEmail,
        phone: userPhoneNumber,
      },
    };
    const option = {
      new: true,
    };
    const updateUser = await User.findOneAndUpdate(filter, updates, option);

    return successResponse(res, {
      statusCode: 200,
      message: "User Update Successfully",
      payload: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

const handleCreateAddress = async (req, res, next) => {
  try {
    const { email } = req.query;
    console.log(email, "find email");
    const { division, cityArea, postcode, address } = req.body;
    console.log(division, cityArea, postcode, address);
    const filter = { email: email };
    const updates = {
      $set: {
        address: {
          division: division,
          city: cityArea,
          postCode: postcode,
          addressDetails: address,
        },
      },
    };
    const option = {
      new: true,
    };
    const updateUser = await User.findOneAndUpdate(filter, updates, option);
    return successResponse(res, {
      statusCode: 200,
      message: "User Address Created Successfully",
      payload: updateUser,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetAddress = async (req, res, next) => {
  try {
    const { email } = req.query;
    console.log(email, "find email");
    const getUserAddress = await User.findOne({ email: email }).select({address:1,_id:0}).lean();
    return successResponse(res, {
      statusCode: 200,
      message: "User Address Return Successfully",
      payload: getUserAddress,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleCreateUser,
  handleGetAllUser,
  handleGetUser,
  handleUpdateUser,
  handleCreateAddress,
  handleGetAddress,
};
