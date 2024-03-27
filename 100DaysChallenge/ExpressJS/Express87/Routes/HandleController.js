const express = require("express");
//this page is router here
const router = express.Router();
//import the controller
const { PostTodo } = require("../Controller/PostTodo");
//define the api routes
router.post("/PostTodo", PostTodo);

//get router imp here
const {getTodo}  = require('../Controller/getTodo');
router.get('/getTodo' , getTodo);


// exports the module here
module.exports = router;
