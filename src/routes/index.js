//@TS-Check
const express = require('express');
const router = express.Router();
require("dotenv").config();
const Uploads = require('../models/upload.model')
//router.use(express.static('static'));

router.use('/', require('./main'));
router.get('/search', async (req, res) => {
    // Retrieve search query (year) from request object
    const year = req.query.year;
  
    // Search for PDF documents in the "Uploads" collection that were uploaded in the specified year
    const searchResults = await Uploads.find({
      year: year,
      fileType: 'application/pdf'
    }).lean();

    searchResults.push({
        name: 'My PDF1',
        fileType: 'application/pdf'
      });
  
    // Render search results in the "search-results" template, passing the results as a local variable
    res.render('search-results', { results: searchResults });
    console.log(searchResults);

  });
  router.get('/filter', (req, res) => {
    const className = req.query.class;
    Uploads.find({ class: className }, (err, uploads) => {
      if (err) {
        return res.send(err);
      }
      res.render('adminAll.hbs', { uploads: uploads });
    });
  });
  
router.use('/', require('./class.routes'));
router.use('/user/class', require('./upload.routes'));
router.use('/user', require('./users.routes'))


module.exports = router;
