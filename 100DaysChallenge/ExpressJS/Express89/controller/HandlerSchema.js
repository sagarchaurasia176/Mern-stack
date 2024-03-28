// create the server req here
// const SchemaData = require('../Model/Schema');
const SD = require("../Model/Schema");
exports.HandlerSchema = async (req, res) => {
  try {
    //desturcture the data here
    const { name, Author } = req.body;
    //pass operation to the db
    const response = await SD.create({ name, Author });
    res.status(200).json({
      success: true,
      data: response,
      messagae:"data stored done"
    });
  } 
  catch {
    console.log("schema error")
      res.status(500).json({
      success: false,
      data: "internal error",
        
    });
  }
};
