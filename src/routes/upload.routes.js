var cors = require('cors')
const express = require('express');
const router = express.Router();
const {createUpload} = require('../controllers/upload.controller');

router.post('/new', function(req,res){
    createUpload
});

// Exports
module.exports = router;