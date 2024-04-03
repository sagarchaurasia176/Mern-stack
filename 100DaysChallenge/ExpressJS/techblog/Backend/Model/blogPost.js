const mongoose = require("mongoose");
//creation for the schema post
const schemaForPost = new mongoose.Schema({
  Post: {
    // when you reffer to the other object from the other module then you should be used the 
    //.ObjectId
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //references to the post model
  },
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//schema for passed the data
module.exports = mongoose.model("schemaforPost", schemaForPost);
