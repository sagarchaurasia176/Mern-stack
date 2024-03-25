// creation of schema => models folder

const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },

  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updaedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

//  exports the schema

module.exports = mongoose.model("Todo", todoSchema);
