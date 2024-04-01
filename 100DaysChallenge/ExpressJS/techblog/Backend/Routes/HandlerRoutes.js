const { PostController } = require("../Controller/PostController");
const { like } = require("../Controller/like");
const { comment } = require("../Controller/comment");
const express = require("express");

const router = express.Router();

// start to send the req
router.post("/post/data", PostController);
router.post("/comment", comment);
router.post("/like", like);

//exports are nedded
module.exports = router;
