const mongoose = require("mongoose");

// we have imp the module here
require("dotenv").config();

//conenect with the  db
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_CONNECT, {
      // pass the two flags
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected succesfuly");
    })
    .catch(() => {
      console.log("error in the db connections");
      process.exit();
    });
};

module.exports = dbConnect;
