const express = require("express");
const router = express.Router();
const {
    PostController,
    getController,
} = require("../Controller/PostController");
// const { getController } = require("../Controller/getController");
const { comment } = require("../Controller/comment");
const { like} = require("../Controller/like");
// =================================//
router.post("/blog/data", PostController);
router.get("/fetch/data", getController);
// comment req
// router.get("/comment/fetch", getComments);
router.post("/comment/add", comment);
//like req
router.post("/like/data", like);
// router.get("/like/datas", likeUnlike);
// MODULE EXPORTS
module.exports = router;
