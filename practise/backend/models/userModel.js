const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: null,
  },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;