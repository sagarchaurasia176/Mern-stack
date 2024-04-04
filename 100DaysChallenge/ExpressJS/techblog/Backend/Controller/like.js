const likeData = require("../Model/likes");
const schemaforPost = require('../Model/blogPost');

// exports the data first
exports.like = async (req, res) => {
  try {
    const { post , user } = req.body;
    const likeStor = await likeData.create({post , user});
    //update that data
    const updateLike  =
    await schemaforPost.findByIdAndUpdate(post,{$push : {likes : likeStor._id}} , 
      {new : true}).populate("likes").exec();
  
    
    // response status 
    res.status(200).json({
      success: true,
      message: "data is passed to db from the like page",
      data: updateLike,
    });
  } catch (er){
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check like page",
      error:er.message
    });
  }
};

















exports.likeUnlike = async (req, res) => {
  try {
    const { email } = req.body;
    //pass the data to the db
    const postSnd = await likeData.create({ email });
    res.status(200).json({
      success: true,
      message: "data is passed to db from the like page",
      data: postSnd,
    });
  } catch {
    console.log("error in post controller");
    res.status(500).json({
      success: true,
      message: "data is not passed to db check like page",
    });
  }
};
