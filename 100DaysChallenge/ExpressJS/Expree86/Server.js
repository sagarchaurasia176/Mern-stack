const express = require("express");
const app = express();

require("dotenv").config();

// two conditions pass here
const PORT = process.env.PORT || 4000;

//middleware to parse json req to body
app.use(express.json());

// mapped the routes here from the route page
const todoRoutes = require("./Routes/routesOfTodo");

// now we have to mount to the route pages
app.use("/api/v1", todoRoutes);

// start ports here

app.listen(4000, () => {
  console.log("Server started at  ");

});

// db connections

const dbConnect = require("./config/dbConnect");
dbConnect();

//default routes

app.get("/", (req, res) => {
  res.send("<b>server work </b>");
});
