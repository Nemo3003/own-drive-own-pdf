
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
const createUpload = async (req, res) => {
  
    const {classy, archive} = req.body;
      try{
      const newUpload = new Upload({classy, archive});
          await newUpload.save();
          res.status(200).json(newUpload)
      }
      catch(e){
        res.status(500).json(e)
      }
  };