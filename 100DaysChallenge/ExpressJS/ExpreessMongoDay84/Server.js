const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("serve start");
});

const body = require("body-parser");
app.use(body.json());

app.post("/api/data", (req, res) => {
  const { name, email } = req.body;
  console.log(name);
  console.log(email);
  res.send("data passed");
});


// connect mongose here
const mongoose = require("mongoose");
// mongoose connections
mongoose
  .connect("mongodb://localhost:27017/JainServer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((e) => {
    console.log("error");
  });
