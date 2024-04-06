const likeData = require("../Model/likes");
const schemaforPost = require("../Model/blogPost");
// exports the data first
exports.like = async (req, res) => {
  try {
    const { post, user } = req.body;
    const likeStor = await likeData.create({ post, user });
    
    //update that data
    
    const updateLike = await schemaforPost.findByIdAndUpdate(
      post,{ $push: { likeData : likeStor._id } },
      //this is the flag which tells about the conditions is true
      { new: true }
    );

    // response status
    res.status(200).json({
      success: true,
      message: "data is passed to db from the like page",
      data: updateLike,
    });
  } catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check like page",
      error: er.message,
    });
  }
};

// get request the data
// exports.likeUnlike = async (req, res) => {
//   try {
//     //pass the data to the db
//     const unLikeData = likeData.findByIdAndDelete({post : post , _id : id});

//     // status the data here
//     res.status(200).json({
//       success: true,
//       message: "data is passed to db from the unlike page",
//       data: unLikeData,
//     });
//   } catch {
//     console.log("error in post controller");
//     res.status(500).json({
//       success: false,
//       message: "data is not passed to db check unlike page",
//     });
//   }
// };
