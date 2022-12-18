var cors = require('cors')
const express = require('express');
const router = express.Router();
const {createUpload, getUploads,seeUploads} = require('../controllers/upload.controller');


router.get('/add', function(req, res){
    res.render('../views/pdf/formLoad.hbs')
})
router.get('/all', function(req, res){
    res.render('../views/pdf/public.hbs')
})
router.get("/all_add", seeUploads)
router.post('/pdf/add', createUpload);

// Exports
module.exports = router;