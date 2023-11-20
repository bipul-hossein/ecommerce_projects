const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
  },
  position:{
    type: String,
  },
  phone: {
    type: Number,
    trim: true,
    //unique: true,
  },
  address: {
    division: {
      type: String,
     // required: [true, "Division is required"],
      trim: true,
    },
    city: {
      type: String,
     // required: [true, "City is required"],
      trim: true,
    },
    postCode: {
      type: Number,
      trim: true,
    },
    addressDetails: {
      type: String,
      //required: [true, "Address is required"],
      trim: true,
    },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;