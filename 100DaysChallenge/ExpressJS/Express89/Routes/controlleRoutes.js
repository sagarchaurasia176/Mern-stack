// this is basically the controller page
const express = require('express');
const router = express.Router();


//controller here
const {HandlerSchema} = require('../controller/HandlerSchema');
const {GetController} = require('../controller/GetController')
//send the post req
router.post('/api/data' , HandlerSchema);
router.get('/api/get' , GetController)


module.exports = router;


