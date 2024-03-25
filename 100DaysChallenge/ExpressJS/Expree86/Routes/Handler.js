// routes page  => which file do you want to mapped

const express = require('express')
// create one router
const router = express.Router();

//import controller
const{CreateTodo} = require('../controllers/CreateTodo');

// define api routes
router.post("/CreateTodo" , CreateTodo);
module.exports = router;

