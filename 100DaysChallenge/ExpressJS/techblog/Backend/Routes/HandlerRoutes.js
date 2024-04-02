const express = require("express");
const router = express.Router();
const { PostController} = require("../Controller/PostController");
const {getController} = require("../Controller/getController")

router.post("/blog/data", PostController);
router.get('/fetch/data' , getController)

// MODULE EXPORTS
module.exports = router;