const mongoose = require("mongoose");
//creation for the schema post

const schemaForLike = new mongoose.Schema({
  email: {
    type: String,
    required: "Email address is required",
  },
});

//schema for passed the data
module.exports = new mongoose.model("likeData", schemaForLike);
