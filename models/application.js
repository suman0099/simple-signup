const mongoose = require("mongoose");
const User = require("./user");
const applicationSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Application = mongoose.model("application", applicationSchema);

module.exports = Application;
