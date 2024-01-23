// required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const uuid = require('.helpers/uuid');
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
app.post('/api/notes', (req, res) =>  {
res.json(`${req.method} request received`)

});
// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );

// post needs to receive a const newNote to save on the req.body
// add new note to db.json
// return new note to client
// each note needs a uuid attached