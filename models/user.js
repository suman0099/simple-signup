const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
