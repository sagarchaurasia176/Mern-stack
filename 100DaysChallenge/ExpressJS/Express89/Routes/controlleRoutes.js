// this is basically the controller page
const express = require("express");
const router = express.Router();

//controller here
const {
    HandlerSchema,
    GetData,
    getController,
} = require("../controller/HandlerSchema");
//send the post req
const { UpdateController } = require("../controller/UpdateController");
const { Delete } = require("../controller/Delete");

// get the data
router.get("/api/get", getController);
// router
router.delete("/api/dlt/:id", Delete);
// post data
router.post("/api/data", HandlerSchema);
// GET REQUEEST DATA HERE
router.get("/api/datas/:id", GetData);
// update done
router.put("/api/datas/:id", UpdateController);
module.exports = router;
