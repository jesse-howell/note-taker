const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const noteData = require('./db/db.json');
const app = express();

// GET route to return index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET route to return notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/notes.html'))
);

// GET route to return all saved notes
app.get('/api/notes', (req, res) => res.json(noteData));

// POST route to receive new note to add to the req.body and serve to the client
app.post('/api/notes', (req, res) => {
  res.json();
});
// DELETE route to delete a note by id

const uuid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
