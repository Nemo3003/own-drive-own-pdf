var cors = require('cors')
const express = require('express');
const router = express.Router();

router.get('/main', (req, res) => {
    res.send('hi');
})


// Exports
module.exports = router;