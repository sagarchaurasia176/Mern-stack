const express = require("express");
const app = express();
//dot env file imp

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware to parse json req body
app.use(express.json());

// import routes for todoapi
const Routes = require("./Routes/Handler");
//mount the api data
app.use("/api/data", Routes);

// start server
app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});

//connection to db

const dbConnect = require("./config/Db");
dbConnect();

//default routes

app.get("/", (req, res) => {
  res.send("<b>Hey data stored into the db </b>");
});
