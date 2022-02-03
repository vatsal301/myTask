var mongoose = require("mongoose");

let schema = {
  name: String,
  email: String,
  password: String,
  re_password: String,
};

module.exports = mongoose.model("registrations", schema);
