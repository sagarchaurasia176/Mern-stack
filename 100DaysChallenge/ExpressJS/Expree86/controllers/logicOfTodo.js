const TodoLogic = require("../models/Schema");
// here we basically passed the logic data
exports.logicOfTodo = async (req, res) => {
  try {
    // destructure the data from the req.body
    const { title, description } = req.body;
    //craete new todo obj and create into the db
    const resp = await TodoLogic.create({ title, description });
    //we have to send the data into the db
    res.status(200).json({
      success: true,
      data: res,
      messagae: "entry created succesfully",
    });
  } catch {
    console.log("error in the Controller page");
    res.status(500).json({
      success: false,
      data: "entry not created succesfuly",
      messagae: "internal error",
    });
  }
};