const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
        unique: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;