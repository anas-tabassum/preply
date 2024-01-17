const database = require("../config/database");
const eventMongooseModel = require("../schema/eventMongooseModel");

const eventModel = async (data) => {
  await database();
  const newUser = new eventMongooseModel(data);

  try {
    const res = await newUser.save();
    return res;
  } catch (error) {
    return error;
  }
};

module.exports = { eventModel };
