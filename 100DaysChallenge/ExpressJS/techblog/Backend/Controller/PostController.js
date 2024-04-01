const postData = require("../Model/blogPost");
// exports the data first

exports.PostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    //pass the data to the db
    const postSnd = await postData.create({ title, description });
    res.status(200).json({
      success: true,
      message: "data is passed to db",
      data: postSnd,
    });
  } catch {
    console.log("error in post controller");
    res.status(500).json({
      success: true,
      message: "data is not passed to db check post controller",
    });
  }
};
