const User = require("../models/userModel");

// use verify admin after verifyToken
const isAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await User.findOne({ email: email });
  const isAdmin = user?.position === "admin";
  if (!isAdmin) {
    return errorResponse(res, {
      statusCode: 403,
      message: "forbidden access",
    });
  }
  next();
};
module.exports = { isAdmin };
