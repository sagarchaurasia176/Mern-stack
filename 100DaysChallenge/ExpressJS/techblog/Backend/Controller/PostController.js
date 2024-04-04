const schemaforPost = require("../Model/blogPost");
exports.PostController = async (req, res) => {
  try {
      const { title, body , likes , Comment } = req.body;
      const postSnd = await schemaforPost.create({ title, body , likes , Comment });
      res.status(200).json({
      success: true,
      message: "data is passed to db",
      data: postSnd,
    });
  } catch (er) {
    console.log("error in post controller");
    res.status(500).json({
      success: false,
      message: "data is not passed to db check post controller",
      error: er.message,
    });
  }
};
