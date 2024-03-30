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
      messagae: "data stored done",
    });
  } catch {
    console.log("schema error");
    res.status(500).json({
      success: false,
      data: "internal error",
    });
  }
};

// exports
exports.GetData = async (req, res) => {
  try {
    const id = req.params.id;
    const chkId = await SD.findById({ _id:id});
    //check the id here
    if (!chkId) {
      return res.status(404).json({
        success: false,
        messagae: "errors from try blocks",
      });
    }
    // next data
    res.status(200).json({
      success: true,
      data: chkId,
      message: "data get from the db",
    });
  } catch {
    console.error("error sir");
    res.status(500).json({
      success: false,
      message: "internal error",
    });
  }
};

// update controller

exports.updateController = async (req, res) => {
  try {
    //id for the params which is basically define the parameter
    const id = req.params.id;
    const { name} = req.body;
    //update from the db
    const updateData = SD.findByIdAndUpdate({ _id: id }, { name});

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

