// required packages
const express = require('express');
const path = require('path');
const fs = require('fs');
// calls the server
const app = express();

// pathway needed to hold the notes database
const { notes } = require('./db/db.json');

// port to run through Heroku
const PORT = process.env.PORT || 3001;





// gets the information request and requirements
app.get("/api/notes", (req,res) => {
    let results = notes;
    if(req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results);
});

// makes the server listen
app.listen(PORT, () => {
    console.log (`API is now on port ${PORT}!`)
});