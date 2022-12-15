
var cors = require('cors')
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('passport')
const {signPassp,logout} = require( '../controllers/users.controllers')

router.get('/', (req,res)=>{
    res.render('../views/index.hbs')
})
router.get('/signin', (req,res)=>{
    res.render('../views/users/signin.hbs')
})
router.post('/signin', signPassp);

// Renders the about view
router.get('/about', (req,res)=>{
    res.render('../views/about.hbs')
})

// logout
router.get('/logout',logout);

// Exports
module.exports = router;