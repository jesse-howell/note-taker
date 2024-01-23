// required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const uuid = require('./helpers/uuid');
const PORT = 3001;
const app = express();

// parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/notes.html'));
  });


// GET route for homepage
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET request for ALL notes
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, notesData), 'utf-8', (err, note) => {
    if (err) {
        console.error(err);
        res.status(500).json('Failed to read notes from database.');  
        }
    const notes = JSON.parse(note);
    res.json(notes);
  });
});


// POST request to add a note
app.post('/api/notes', (req, res) =>  {
    fs.readFile(path.join(__dirname, notesData), 'utf-8', (err, note) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to read notes from database.'});
    }
        const notes = JSON.parse(note);
        const newNoteId = uuid();

        const newNote = {
            id: newNoteId,
            title: req.body.title,
            content: req.body.content,
        };
        notes.push(newNote);

        fs.writeFile(path.join(__dirname, notesData), JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({error: 'Failed to read notes from database.'});
            }

            res.json(newNote);
        })
    });
});

// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );

// post needs to receive a const newNote to save on the req.body
// add new note to db.json
// return new note to client
// each note needs a uuid attached