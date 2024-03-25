//controller page here

const SchemaTodo = require("../models/SchemaTodo");

//define the route handler
exports.CreateTodo = async (req, res) => {
  try {
    //destrucing the schema data
    const { title, description } = req.body;
    //create a new todo obj and insert into the db
    const resp = await SchemaTodo.create({ title, description });
    //  resp with success flags
    // send json
    resp.status(200).json({
      success: true,
      data: resp,
      message: "entry data created",
    })} 
    catch(er){
        console.log("error");
        resp.status(500).json({
          success: false,
          data: "internal server error",
          message:er.message,
        });
      }    
};
