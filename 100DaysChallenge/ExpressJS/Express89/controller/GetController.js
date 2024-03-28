const getData = require("../Model/Schema");
// exports the data here

exports.GetController = async (req, res) => {
  try {
 
    const dataPassToDb = await getData.find({});
    res.status(200).json({
      Success: true,
      message: "data get succefuly",
      data: dataPassToDb,
    });
  } catch {
    console.log("error in code");
    res.status(500).json({
      Success: false,
      message: "data not get succefuly",
    });
  }
  //destructure for it
};
