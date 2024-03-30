// this is basically the controller page
const express = require("express");
const router = express.Router();

//controller here
const { HandlerSchema , GetData  } = require("../controller/HandlerSchema");
//send the post req

const {updateController} = require('../controller/UpdateController')

router.post("/api/data", HandlerSchema);
// GET REQUEEST DATA HERE
router.get('/api/datas/:id' , GetData);
// update done
router.put('/update/:id' , updateController);


module.exports = router;
