const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

// GET route for retrieving all of the notes
notes.get('/', (req, res) => {
    res.sendFile('../public/notes.html')
});

//return locally stored data
notes.get('/api/notes', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST route for the notes column
notes.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, '..db/db.json');
        res.json('Note added successfully!');
    } else {
        res.error('Error in adding Note');
    }
});

module.exports = notes;