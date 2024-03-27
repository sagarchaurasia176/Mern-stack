// controller page
//stored the jsmGet data

const jsmGet = require("../Model/JsmServerSchema");
// exports the data here using getTodo
exports.getTodo = async (req, res) => {
  try {
    const { paper, Author } = req.body;
    // to retrive the data here
    const getData = await jsmGet.find({});

    res.status(200).json({
      success: true,
      data: getData,
      message: "data succesfully retrived",
    });
  } catch {
    console.log("error in the code");
    res.status(500).json({
      success: false,
      data: "interna errors",
      message: "data failed",
    });
  }
};
