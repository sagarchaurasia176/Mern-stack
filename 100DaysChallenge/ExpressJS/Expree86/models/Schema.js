// schema files

const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema(
    {
        // create the propertie of the data
        titile: {
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
        updatedAt:{
            type : Date,
            required : true,
            default : Date.now(),
        }

    }
)

module.exports = mongoose.model ("Schema" , todoSchema )