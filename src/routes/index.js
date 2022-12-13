//@TS-Check
const express = require('express');
const router = express.Router();
//router.use(express.static('static'));


router.use('/', require('./main'));
router.use('/class', require('./upload.routes'));


module.exports = router;
