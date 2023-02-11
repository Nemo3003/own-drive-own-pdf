const mongoose = require('mongoose');

const UploadFile = new mongoose.Schema({
    year:{
        type: String,
        required: true,
    },
    first:{
        type: String,
        required: false,
    },
    second:{
        type: String,
        required: false,
    },
    third:{
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true
    },
    first_alt:{
        type: String,
        required: true
    },
    second_alt:{
        type: String,
        required: true
    },
    third_alt:{
        type: String,
        required: true
    },
    fourth_alt:{
        type: String,
        required: true
    },
    fifth_alt:{
        type: String,
        required: true
    }
 
})

module.exports = mongoose.model("Upload", UploadFile);