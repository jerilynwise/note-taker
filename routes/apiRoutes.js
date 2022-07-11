//imports
const router = require('express').Router();
const { deleteNote, createNote, validateNote } = require('../lib/notes');
const { notes } = require('../db/db.json');

//get route to pull all saved notes and apply to screen
router.get('/notes', (req,res) => {
    let savedNotes = notes;
    res.json(savedNotes)
})

//route to delete the note based off id number
router.delete('/notes/:id', (req,res) => {
    const params = req.params.id
    deleteNote(params, notes)
    res.redirect('')
});

//post data as an object to the server
router.post('/notes', (req,res) => {
    //sets id based on what the next idex of array will be
    req.body.id = notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send(`The note is not properly filled out.`)
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;