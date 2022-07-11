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

//parse incoming data and allow app to accept 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//function to get existing notes
function findNoteId(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    if (result) {
        res.join(result);
    }else {
        res.send(404);
    }
}

//function to add a new note
function createNote(body, notesArray) {
    console.log(body);

    return body;
}

//function to verify all fields are filled out
function validateNote(note) {
    if (!note.tile || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}



//*****NEED TO ADD A WAY TO PULL ALL EXISITING NOTES**** */

//get route to pull a note based off its id number
app.get('api/notes/:id', (req,res) => {
    const result = findNoteId(req.params.id, notes);
    res.join(result);
});

//post data as an object to the server
app.post('api/notes', (req,res) => {
    //sets id based on what the next idex of array will be
    req.body.id = notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send(`The note is not properly filled out.`)
    } else {
        const note = createNote(req.body, notes);
        res.join(note);
    }
});



// makes the server listen
app.listen(PORT, () => {
    console.log (`API is now on port ${PORT}!`)
});