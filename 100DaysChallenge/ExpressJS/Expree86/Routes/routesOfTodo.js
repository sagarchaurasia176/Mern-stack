//routes page
const express = require("express");
const router = express.Router();
// imp controller
const { logicOfTodo } = require("../controllers/logicOfTodo");
//api routes define here means it wrapped from the controller page
router.post("/Todo", logicOfTodo);
module.exports = router;