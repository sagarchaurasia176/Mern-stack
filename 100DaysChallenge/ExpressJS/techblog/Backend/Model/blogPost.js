const mongoose = require("mongoose");
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
module.exports = mongoose.model("schemaforPost", schemaForPost);
