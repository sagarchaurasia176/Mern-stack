//this page is controller
//imp form the model
const Jsm = require("../Model/JsmServerSchema");
// another way to exporst the servers
// write the file name here
exports.PostTodo = async (req, res) => {
  // send the request to the server
  try {
    const { paper, Author } = req.body;
    //they create the folder into the db
    const response = await Jsm.create({ paper, Author });
    res.status(200).json({
      // this code give you the resp
      success: true,
      data: response,
      message: "Data is created succesfully",
    });
  } catch {
    console.log("error in the execution of the code");
    // this code give you the resp
    res.status(500).json({
      success: false,
      data: "internal errors",
      message: "Data is not created succesfully",
    });
  }
};
