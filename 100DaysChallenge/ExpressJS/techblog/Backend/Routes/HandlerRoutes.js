const express = require("express");
const router = express.Router();
const { PostController} = require("../Controller/PostController");
const {getController} = require("../Controller/getController")
const {comment , getComments} =  require('../Controller/comment')
const {like , likeUnlike} =  require('../Controller/like');


// =================================//
router.post("/blog/data", PostController);
router.get('/fetch/data' , getController)



// comment req
router.get('/comment/fetch' , getComments );
router.post('/comment/add' , comment)



//like req
router.get('/like/data' , like);
router.post('/unlike/data' , likeUnlike); 
// MODULE EXPORTS
module.exports = router;