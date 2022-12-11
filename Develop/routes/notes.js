const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for retrieving all of the notes
tips.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => resizeBy.json(JSON.parse(data)));
});

// POST route for the notes column
tips.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote ={
            title,
            text,
            tip_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully!');
    } else {
        res.error('Error in adding Note');
    }
});

module.exports = notes;