const { mongoose } = require("mongoose");
const User = require("../models/userModel");
const createError = require("http-errors");
const { successResponse, errorResponse } = require("./responseController");
const jwt = require("jsonwebtoken");
const UserFaq = require("../models/faqModel");
// const secretJWTKey=process.env.ACCESS_WEB_SECRET
// const { createJsonWebToken } = require("../helper/jsonwebtoken");

const handleCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    console.log(req.body,email,'erer');
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
    if (error instanceof mongoose.Error) {
      next(createError(400, "User Created UnSuccess"));
      return;
    }
    next(error);
  }
};

//checking admin
const handleGetAdmin = async (req, res, next) => {
  const email = req.params.email;
  if (email !== req.decoded.email) {
    return createError(403, "forbidden access");
  }
  const user = await User.findOne({ email: email });
  let admin = false;
  if (user) {
    admin = user?.position === "admin";
  }
  res.send({ admin });
};

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
// create jwt
const handleJWT = async (req, res, next) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ email: email });
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
//faq
const handleCreateFaq = async (req, res, next) => {
  try {
    const { question, answer } = req.body;
    const data = {
      question: question,
      answer: answer,
    };
    const newFaq = await UserFaq.create(data);
    return successResponse(res, {
      statusCode: 200,
      message: "User faq Return Successfully",
      payload: newFaq,
    });
  } catch (error) {
    next(error);
  }
};
const handleAllGetFaq = async (req, res, next) => {
  try {
    const getAllUserFaq = await UserFaq.find({}).lean();
    return successResponse(res, {
      statusCode: 200,
      message: "User faq Return Successfully",
      payload: getAllUserFaq,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const getUserFaq = await UserFaq.findOne({ _id: id }).lean();
    return successResponse(res, {
      statusCode: 200,
      message: "User faq Return Successfully",
      payload: getUserFaq,
    });
  } catch (error) {
    next(error);
  }
};
const handleUpdateFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const updates = {
      $set: {
        question: req.body?.question,
        answer: req.body?.answer,
      },
    };
    const option = {
      new: true,
    };
    const getUpdateFaq = await UserFaq.findOneAndUpdate(
      filter,
      updates,
      option
    );
    return successResponse(res, {
      statusCode: 200,
      message: "User faq Update Successfully",
      payload: getUpdateFaq,
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteFaq = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteFaq = await UserFaq.findOneAndDelete({ _id: id });
    if (!deleteFaq) {
      throw createError(404, "faq not found");
    }
    return successResponse(res, {
      statusCode: 200,
      message: "User faq Delete Successfully",
      payload: deleteFaq,
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
  handleGetAdmin,
  handleAllGetFaq,
  handleCreateFaq,
  handleGetFaq,
  handleUpdateFaq,
  handleDeleteFaq,
};
