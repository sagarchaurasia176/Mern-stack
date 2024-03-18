//this two things are mandatory for creating any of the server

const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("server run");
});

// routing concepts
app.get("/", (req, res) => {
  res.send("Hey welcome in Backend!");
});

app.put("/", (req, res) => {
  res.send("msg from put side");
});

app.delete("/", (req, res) => {
  res.send("delete msg");
});

app.put("/", (req, res) => {
  res.send("update the msg");
});
