//imports
const path = require('path');
const router = require('express').Router();


//get the html files to be served from the express.js server
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;