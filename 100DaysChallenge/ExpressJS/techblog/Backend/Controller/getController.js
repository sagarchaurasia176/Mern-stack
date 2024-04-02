// get request for the post datas
const schemaforPost = require("../Model/blogPost");
// getController
exports.getController = async (req, res) => {
    try {
      //pass the data
      const fetchPostData = await schemaforPost.find({})
        res.status(200).json({
        success: true,
        data: fetchPostData,
        message: "fetch the data from the db",
      });
    } 
      catch (er) {
      console.log("error");
       res.status(500).json({
        success: false,
        message: "data is not be fetch from the db",
        data: er.message,
      });
    }
  };