var cors = require('cors')
const express = require('express');
const router = express.Router();
const {createUpload, getUploads,seeUploads} = require('../controllers/upload.controller');
const {signPassp,logout} = require( '../controllers/users.controllers')

router.get('/add', function(req, res){
    res.render('../views/pdf/formLoad.hbs')
})

router.get('/all', function(req, res){
    res.render('../views/pdf/public.hbs')
})
router.get("/all_add", seeUploads)

router.post('/pdf/add', createUpload);

router.get('/filter', (req, res) => {
    const className = req.query.class;
    Upload.find({ class: className }, (err, uploads) => {
      if (err) {
        return res.send(err);
      }
      res.render('../views/pdf/adminAll.hbs', { uploads: uploads });
    });
  });
// Exports
module.exports = router;