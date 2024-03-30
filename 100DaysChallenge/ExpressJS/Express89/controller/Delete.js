const SD = require("../Model/Schema");
exports.Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const dltData = await SD.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "data dlt",
      data: dltData,
    });
  } catch (er) {
    res.status(500).json({
      success: false,
      error: er.message,
      message: "data dlt",
    });

    console.log("error in the dlt code");
  }
};
