//@TS-Check
const express = require('express');
const router = express.Router();
//router.use(express.static('static'));

router.use('/', require('./main'));
router.use('/', require('./class.routes'));
router.use('/user/class', require('./upload.routes'));
router.use('/user', require('./users.routes'))


module.exports = router;
