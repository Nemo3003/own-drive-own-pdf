var cors = require('cors')
const express = require('express');
const router = express.Router();
const {createUpload} = require('../controllers/upload.controller');


router.get('/add', function(req, res){
    res.render('../views/pdf/formLoad.hbs')
})
router.get('/all', function(req, res){
    res.render('../views/pdf/public.hbs')
})

router.post('/pdf/add', function(req,res){
    createUpload
    
});

// Exports
module.exports = router;