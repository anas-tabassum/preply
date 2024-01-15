require("dotenv").config();
const mongoose = require("mongoose");
const db_url = process.env.DATABASE_URL;

function connection() {
  return mongoose
    .connect(db_url)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    });
}

module.exports = connection;
