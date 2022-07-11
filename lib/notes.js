//Dependencies
const fs = require('fs');
const path = require('path');

//function delete note by removing it from the array
function deleteNote(id, notesArray) {
    let noteId = id;
    for (let i= 0; i < notesArray.length; i++) { 
        if (noteId === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notes: notesArray}, null, 2), err => {
                if (err) {
                    throw err;
                }
            });

        }
    }
}

//function to add a new note
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return note;
}

//function to verify all fields are filled out
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    deleteNote,
    createNote,
    validateNote
};
