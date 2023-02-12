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
    saludmen:{
        type: String,
        required: false,
    },
    saludpu:{
        type: String,
        required: false,
    },
    competencia:{
        type: String,
        required: false,
    },
    fundamentos:{
        type: String,
        required: false,
    },
    practicai:{
        type: String,
        required: false,
    },
    fisiologia:{
        type: String,
        required: false,
    },
    bioquimica:{
        type: String,
        required: false,
    },
    anatomia:{
        type: String,
        required: false,
    },
    filosofia:{
        type: String,
        required: false,
    },
    enfermeriaad:{
        type: String,
        required: false,
    },
    farmacologia:{
        type: String,
        required: false,
    },
    infectologia:{
        type: String,
        required: false,
    },
    saludmenii:{
        type: String,
        required: false,
    },
    practicaii:{
        type: String,
        required: false,
    },
    antropologia:{
        type: String,
        required: false,
    },
    nutricion:{
        type: String,
        required: false,
    },
    informatica:{
        type: String,
        required: false,
    },
    bioetica:{
        type: String,
        required: false,
    },
    gerontologia:{
        type: String,
        required: false,
    },
    orggesadm:{
        type: String,
        required: false,
    },
    comunitaria:{
        type: String,
        required: false,
    },
    practicaiii:{
        type: String,
        required: false,
    },
    ingles:{
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