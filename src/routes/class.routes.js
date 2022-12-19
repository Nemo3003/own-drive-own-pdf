var cors = require('cors')
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/coneyone', (req, res) => {
    res.render('../views/pdf/anio/one/oneclassoneyear.hbs')
})

// Exports
module.exports = router;
