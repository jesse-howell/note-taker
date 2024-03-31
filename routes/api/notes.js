const app = require('express').Router();
const { v4: uuidv4 } = require('uuidv4');
const noteData = require('../../db/notes.json');
const fs = require('fs');
const notes = require('./notes');
// GET route to return all saved notes
app.get('/api/notes', (req, res) => {
  res.json(noteData);
});

// POST route to receive new note to add to the req.body and serve to the client
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  noteData.push(newNote);
  fs.writeFile('../../db/notes.json', JSON.stringify(noteData), (err) => {
    if (err) throw err;
    console.log('New note saved!');
  });
  res.json(noteData);
});
// DELETE route to delete a note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < noteData.length; i++) {
    if (noteData[i].id === id) {
      noteData.splice(i, 1);
    }
  }
  fs.writeFile('../../db/notes.json', JSON.stringify(noteData), (err) => {
    if (err) throw err;
    console.log('Note deleted!');
  });
  res.json(noteData);
});

module.exports = notes;
