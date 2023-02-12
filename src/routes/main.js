var cors = require('cors')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/index.hbs')
})
router.get('/main', (req,res)=>{
    res.render('../views/index.hbs')
})
// Renders the about view
router.get('/about', (req,res)=>{
    res.render('../views/about.hbs')
})

// Exports
module.exports = router;