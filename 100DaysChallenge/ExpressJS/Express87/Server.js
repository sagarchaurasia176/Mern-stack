const express = require("express");
const app = express();
// dotenv ()
require("dotenv").config();
//to pass the middleware into the parser
app.use(express.json());

//imp the  routes

// call the router for the get req
const getReq = require("./Routes/HandleController");
app.use("/paper/api", getReq);

const routesWrapped = require("./Routes/HandleController");
//mount the api here
app.use("/api/datas", routesWrapped);
// port here
const PORT = process.env.PORT || 4000;
//start server
app.listen(PORT, () => {
  console.log("sever start");
});

//start connect with the db

const dbConnect = require("./Config/Dbconncetion");
dbConnect();

// define defalut funtions
app.get("/", (req, res) => {
  res.send("<h1>hey well done </h1>");
});
