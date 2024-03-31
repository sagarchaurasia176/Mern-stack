const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("./config/db");
mongoose();
//middleware
app.use(express());

//routes file

//port for the server
app.listen(process.env.PORT, () => {
  console.log("server start.....");
});
