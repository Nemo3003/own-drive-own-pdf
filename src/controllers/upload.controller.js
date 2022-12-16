
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Upload = require('../models/upload.model');

const getUploads = async (req, res, next) => {
    try{
        Upload.find({}, function(err, uploads){
            let uplMap = {};
            uploads.foreach(function(upload){
                uplMap[uploads._id] = uploads;
            });
            res.status(200).send(uplMap);
    }).lean().sort();}
    catch(e){
        res.status(404).send(e.message);
    }
}
// *********************************************************************************************** //
const createUpload = async(req,res) => {
    const{name, first_alt, second_alt, third_alt, fourth_alt, fifth_alt} = req.body;
    const errors = [];
    if(!name){errors.push({text: 'Insert name!'});}
    if(!first_alt){errors.push({text: 'Insert first alternative!'});}
    if(!second_alt){errors.push({text: 'Insert second alternative!'});}
    if(!third_alt){errors.push({text: 'Insert third alternative!'});}
    if(!fourth_alt){errors.push({text: 'Insert fourth alternative!'});}
    if(!fifth_alt){errors.push({text: 'Insert fifth alternative!'});}
    if(errors.length >0){
        res.render('../views/pdf/adminAll', {
            errors,
            name,
            first_alt,
            second_alt,
            third_alt,
            fourth_alt,
            fifth_alt
        });
    }
    try{
    const newUpload = new Upload({name, first_alt, second_alt, third_alt, fourth_alt, fifth_alt});
    await newUpload.save()
    req.flash('success_msg', 'PDF added successfully')
    res.status(200).redirect('/add_all')
  }
  catch(e){
    req.flash('error_msg', 'PDF has not been added successfully')
    res.status(500).redirect('/class/add')
  }
  
  }

  module.exports = {
    getUploads, 
    createUpload
  }