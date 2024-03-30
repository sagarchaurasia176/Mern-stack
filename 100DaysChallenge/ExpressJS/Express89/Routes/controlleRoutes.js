// this is basically the controller page
const express = require("express");
const router = express.Router();

//controller here
const { HandlerSchema, GetData , updateController } = require("../controller/HandlerSchema");
//send the post req


router.post("/api/data", HandlerSchema);
// GET REQUEEST DATA HERE
router.get("/api/datas/:id", GetData);
// update done
router.put("/api/datas/:id", updateController);

module.exports = router;
