const express = require("express");
const app = express();
const RoutesImp = require("./Routes/controlleRoutes");

const dbConnection = require("./config/DbCreate");
//config here
require("dotenv").config();

//pass the middleware

app.use(express.json());
//for routes

app.use("/api/data", RoutesImp);

//port here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server start");
});

app.get("/", (req, res) => {
  res.send("<h2>Data work fine ❤️</h2>");
});

dbConnection();
