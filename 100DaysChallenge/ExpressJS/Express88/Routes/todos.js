const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../Controller/createTodo");

//define APi routes
router.post("/createTodo", createTodo);

module.exports = router;