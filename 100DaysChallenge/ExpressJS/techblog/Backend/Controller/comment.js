const commentData = require('../Model/Comment');

// exports the data first
exports.comment = async (req, res) => {
  try {
    const { email, title , description } = req.body;
    //pass the data to the db
    const postSnd = await commentData.create({ email , title, description });
    res.status(200).json({
      success: true,
      message: "data is passed to db from the comment page",
      data: postSnd,
    });
  } catch {
    console.log("error in post controller");
    res.status(500).json({
      success: true,
      message: "data is not passed to db check comment page",
    });
  }
};
