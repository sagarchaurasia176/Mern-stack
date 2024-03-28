const mongoose = require("mongoose");

//crete the obj here where we write the properties of the data
const propertiesOFData = new mongoose.Schema({
  //write the object here
  name: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("SD", propertiesOFData);
