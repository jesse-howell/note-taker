// required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const uuid = require('uuid');
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
app.get('/api/notes', (req, res) => res.json(notesData));


// POST request to add a note
// app.post('/api/notes', (req, res) => )


// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );

    // the get /notes returns the notes.html successfully
    // the get * returns index.html successfully
    // i need /api/notes to read db.json and return all saved notes to the db.json as a json
    // post should add the new to db.json then display the note on the notes.html page