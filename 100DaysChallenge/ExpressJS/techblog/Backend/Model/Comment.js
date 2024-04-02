const mongoose = require("mongoose");
//creation for the schema post

const schemaForComments = new mongoose.Schema({
  email: {
    type: String,
    require:true,
   },

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
module.exports = new mongoose.model("CommentData", schemaForComments);
