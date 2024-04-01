const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/db");
const routerData = require("./Routes/HandlerRoutes");
const PORTS = process.env.PORT || 8000;
//middleware
app.use(express.json());
//routes file
//now start to mounting
app.use("/api/blog", routerData);
//port for the server

app.listen(PORTS, () => {
  console.log("server start.....");
});
app.get("/", (req, res) => {
  res.send("<b>This is backend blog server</b>");
});
dbConnect()
