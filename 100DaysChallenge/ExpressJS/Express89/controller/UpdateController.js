const schemaData = require("../Model/Schema");
// exports the data here

// file imp properly 
exports.updateController = async (req, res) => {
  try {
    //id for the params which is basically define the parameter
    const { id } = req.params;
    const { Author } = req.body;
    //update from the db

    const updateData = schemaData.findByIdAndUpdate(
      {_id:id},{Author});
    res.status(200).json({
      success: true,
      data: updateData,
      message: " data is updated",
    });
  } catch {
    console.log("errro in  controller");
    res.status(500).json({
      success: false,
      message: " data is not  updated",
    });
  }
};
