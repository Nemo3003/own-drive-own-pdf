
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

const seeUploads = async (req,res)=>{
    const uploads = await Upload.find({})
    .lean()
    .sort({date: 'desc'});
    res.render('../views/pdf/adminAll', { uploads });
  }


  



// *********************************************************************************************** //
const createUpload = async(req,res) => {
    const{year,classy, name,first,second, third,saludmen,saludpu,competencia,fundamentos,practicai,fisiologia,bioquimica,anatomia,filosofia, enfermeriaad,farmacologia,infectologia,saludmenii,practicaii,antropologia,nutricion,informatica,bioetica,gerontologia,orggesadm,comunitaria,practicaiii,ingles, first_alt, second_alt, third_alt, fourth_alt, fifth_alt} = req.body;
    const errors = [];
    if(!year){errors.push({text: 'Insert year!'});}
    if(!classy){errors.push({text: 'Insert class!'});}
    if(!name){errors.push({text: 'Insert name!'});}
    if(!first_alt){errors.push({text: 'Insert first alternative!'});}
    if(!second_alt){errors.push({text: 'Insert second alternative!'});}
    if(!third_alt){errors.push({text: 'Insert third alternative!'});}
    if(!fourth_alt){errors.push({text: 'Insert fourth alternative!'});}
    if(!fifth_alt){errors.push({text: 'Insert fifth alternative!'});}
    if(errors.length >0){
        res.render('../views/pdf/adminAll', {
            errors,
            year,
            first,
            second,
            third,
            saludmen,
            saludpu,
            competencia,
            fundamentos,
            practicai,
            fisiologia,
            bioquimica,
            anatomia,
            filosofia,
            enfermeriaad,
            farmacologia,
            infectologia,
            saludmenii,
            practicaii,
            antropologia,
            nutricion,
            informatica,
            bioetica,
            gerontologia,
            orggesadm,
            comunitaria,
            practicaiii,
            ingles,
            name,
            first_alt,
            second_alt,
            third_alt,
            fourth_alt,
            fifth_alt
        });
    }
    try{
    const newUpload = new Upload({year,classy, name,first,second, third,saludmen,saludpu,competencia,fundamentos,practicai,fisiologia,bioquimica,anatomia,filosofia, enfermeriaad,farmacologia,infectologia,saludmenii,practicaii,antropologia,nutricion,informatica,bioetica,gerontologia,orggesadm,comunitaria,practicaiii,ingles, first_alt, second_alt, third_alt, fourth_alt, fifth_alt});
    await newUpload.save()
    req.flash('success_msg', 'PDF added successfully')
    res.status(200).redirect('/user/class/all_add')
  }
  catch(e){
    req.flash('error_msg', 'PDF has not been added successfully')
    res.status(500).redirect('/user/class/add')
  }
  
  }

  module.exports = {
    getUploads, 
    createUpload,
    seeUploads
  }