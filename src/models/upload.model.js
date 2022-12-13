const mongoose = require('mongoose');

const UploadFile = new mongoose.Schema({
    classy: {
        type: String,
        required: true
    },
    archive:{
        type: String,
        required: true
    }
 
})

module.exports = mongoose.model("Upload", UploadFile);