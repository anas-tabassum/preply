const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const userMongooseModel = mongoose.model("user", userSchema);

module.exports = userMongooseModel;
