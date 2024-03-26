// config file
const mongoose = require("mongoose");
// dotenv file for module import...
require("dotenv").config();
// db connections here
const dbConnections = () => {
  // establish the connections
  mongoose.connect(process.env.DATABASE_URL, {
      // two flag passed
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection succesful from the db");
    })
    .catch(() => {
      console.log("error");
      process.exit(1);
    });
};
// exports parts in db
module.exports = dbConnections;