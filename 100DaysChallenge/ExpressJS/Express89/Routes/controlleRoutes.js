// this is basically the controller page
const express = require("express");
const router = express.Router();

//controller here
const { HandlerSchema, GetData  } = require("../controller/HandlerSchema");
//send the post req
const {UpdateController} = require('../controller/UpdateController')
const {Delete} = require('../controller/Delete')

// router
router.delete('/api/dlt/:id'  ,Delete)

router.post("/api/data", HandlerSchema);
// GET REQUEEST DATA HERE
router.get("/api/datas/:id", GetData);

// update done
router.put("/api/datas/:id" ,  UpdateController);
module.exports = router;
