var cors = require('cors')
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

// ***************** FIRST YEAR *****************
router.get('/coneyone', (req, res) => {
    res.render('../views/pdf/anio/one/psiq/oneclassoneyear.hbs')
})
router.get('/coneytwo', (req, res) => {
    res.render('../views/pdf/anio/one/filosofia/twoclassoneyear.hbs')
})
router.get('/coneythree', (req, res) => {
    res.render('../views/pdf/anio/one/competencia/threeclassoneyear.hbs')
})
router.get('/coneyfourth', (req, res) => {
    res.render('../views/pdf/anio/one/fundamentos/fourthclassoneyear.hbs')
})
router.get('/coneyfifth', (req, res) => {
    res.render('../views/pdf/anio/one/practica1/fifthclassoneyear.hbs')
})
router.get('/coneysix', (req, res) => {
    res.render('../views/pdf/anio/one/fisiologia/sixclassoneyear.hbs')
})
router.get('/coneyseven', (req, res) => {
    res.render('../views/pdf/anio/one/bioquimica/sevenclassoneyear.hbs')
})
router.get('/coneyeight', (req, res) => {
    res.render('../views/pdf/anio/one/anatomia/eightclassoneyear.hbs')
})
router.get('/coneynine', (req, res) => {
    res.render('../views/pdf/anio/one/salud/nineclassoneyear.hbs')
})


// ***************** SECOND YEAR *****************
// Exports
module.exports = router;
