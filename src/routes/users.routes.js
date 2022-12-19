
var cors = require('cors')
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('passport')
const {signPassp,logout} = require( '../controllers/users.controllers')

router.get('/signin', (req,res)=>{
    res.render('../views/users/signin.hbs')
})
router.post('/signin', signPassp);

// logout
router.get('/logout',logout);

// Exports
module.exports = router;