const mongoose = require("../config/db");
//creation for the schema post

const schemaForPost = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

//schema for passed the data
module.exports = new mongoose.model("postData", schemaForPost);
