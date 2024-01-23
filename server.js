// required modules
const fs = require('fs');
const express = require('express');
const path = require('path');
const dbData = require('./db/db.json');
const PORT = 3001;
const app = express();

// GET HTML request routes
// receives notes request then returns the notes.html file to client
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/views/notes.html'))
);
// receives wildcard request then returns the index.html file to client
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET API request route
app.get('/api/notes', (req, res) => res.json(dbData));


// POST API request route
// app.post('/api/notes', (req, res) => res.json(dbData));
// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );

    // the get /notes returns the notes.html successfully
    // the get * returns index.html successfully
    // i need /api/notes to read db.json and return all saved notes to the db.json as a json
    // post should add the new to db.json then display the note on the notes.html page