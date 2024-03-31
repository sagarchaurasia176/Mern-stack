const mongoose = require("../config/db");
//creation for the schema post

const schemaForComments = new mongoose.Schema({
    
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // boorow the code from stackoverflow
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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
