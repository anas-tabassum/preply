const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  email: String,
  date: String,
  type: String,
  people: String,
  number: String,
  detail: String,
});

const eventMongooseModel = mongoose.model("event", eventSchema);

module.exports = eventMongooseModel;
