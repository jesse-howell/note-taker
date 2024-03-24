const notes = require('express').Router();
const { v4: uuidv4 } = require('uuidv4');
const noteData = require('/Users/slothking/Bootcamp/challenges/note-taker/db/db.json');
const fs = require('fs');

// GET route to return all saved notes
notes.get('/api/notes', (req, res) => {
  res.json(noteData);
});

// POST route to receive new note to add to the req.body and serve to the client
notes.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  noteData.push(newNote);
  fs.writeFile(
    '/Users/slothking/Bootcamp/challenges/note-taker/db/db.json',
    JSON.stringify(noteData),
    (err) => {
      if (err) throw err;
      console.log('New note saved!');
    }
  );
  res.json(noteData);
});
// DELETE route to delete a note by id
notes.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < noteData.length; i++) {
    if (noteData[i].id === id) {
      noteData.splice(i, 1);
    }
  }
  fs.writeFile('db/db.json', JSON.stringify(noteData), (err) => {
    if (err) throw err;
    console.log('Note deleted!');
  });
  res.json(noteData);
});

module.exports = notes;
