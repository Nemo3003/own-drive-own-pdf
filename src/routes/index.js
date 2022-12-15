//@TS-Check
const express = require('express');
const router = express.Router();
//router.use(express.static('static'));

router.use('/class', require('./upload.routes'));
router.use('/', require('./users.routes'))


module.exports = router;
