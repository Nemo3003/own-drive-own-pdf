var cors = require('cors')
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

// ***************** FIRST YEAR *****************
router.get('/coneyone', (req, res) => {
    res.render('../views/pdf/anio/one/oneclassoneyear.hbs')
})
router.get('/coneytwo', (req, res) => {
    res.render('../views/pdf/anio/one/twoclassoneyear.hbs')
})
router.get('/coneythree', (req, res) => {
    res.render('../views/pdf/anio/one/threeclassoneyear.hbs')
})
router.get('/coneyfourth', (req, res) => {
    res.render('../views/pdf/anio/one/fourthclassoneyear.hbs')
})
router.get('/coneyfifth', (req, res) => {
    res.render('../views/pdf/anio/one/fifthclassoneyear.hbs')
})
router.get('/coneysix', (req, res) => {
    res.render('../views/pdf/anio/one/sixclassoneyear.hbs')
})
router.get('/coneyseven', (req, res) => {
    res.render('../views/pdf/anio/one/sevenclassoneyear.hbs')
})
router.get('/coneyeight', (req, res) => {
    res.render('../views/pdf/anio/one/eightclassoneyear.hbs')
})
router.get('/coneynine', (req, res) => {
    res.render('../views/pdf/anio/one/nineclassoneyear.hbs')
})
// ***************** SECOND YEAR *****************
// Exports
module.exports = router;
