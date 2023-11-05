const { mongoose } = require("mongoose");
const User = require("../models/userModel");
const createError = require("http-errors");
const { successResponse, errorResponse } = require("./responseController");
const jwt = require("jsonwebtoken");
// const secretJWTKey=process.env.ACCESS_WEB_SECRET
// const { createJsonWebToken } = require("../helper/jsonwebtoken");

const handleCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    console.log("clg", firstName, lastName, email);
    const data = {
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
    };
    const newUser = await User.create(data);
    res.send(newUser);
    return successResponse(res, {
      statusCode: 200,
      message: "User Created Successfully",
      payload: newUser,
    });
  } catch (error) {
    if (error instanceof mongoose.Error) {
      next(createError(400, "User Created UnSuccess"));
      return;
    }
    next(error);
  }
};

// create jwt
// const token = createJsonWebToken({email},secretJWTKey,'10m')
// console.log(token);

const verifyJWT = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    // if token not get
    if (!authorization) {
      return errorResponse(res, {
        statusCode: 401,
        message: "Unauthorized access verify jwt",
      });
    }
    // if get token as [ bearer token]
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_WEB_SECRET, (err, decoded) => {
      if (err) {
        return errorResponse(res, {
          statusCode: 401,
          message: "Unauthorized access",
        });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 401,
      message: "Unauthorized access",
    });
  }
};

const handleJWT = async (req, res, next) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const user = await User.findOne(query);
    if (user) {
      const token = jwt.sign({ email }, process.env.ACCESS_WEB_SECRET, {
        expiresIn: "1d",
      });

      return successResponse(res, {
        statusCode: 200,
        message: "User Get Successfully",
        payload: { accessToken: token },
      });
    }
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
    const filter = { email: email };
    const updates = {
      $set: {
        address: {
          division: req.body.division,
          city: req.body.cityArea,
          postCode: req.body.postcode,
          addressDetails: req.body.address,
        },
        phone: req.body?.phone,
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
    console.log(email);
    const getUserAddress = await User.findOne({ email: email })
      .select({ address: 1, _id: 0 })
      .lean();
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
  handleJWT,
  verifyJWT,
};
