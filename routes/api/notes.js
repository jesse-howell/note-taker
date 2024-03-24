const notes = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET route to return index.html

// GET route to return notes.html
// GET route to return all saved notes
// POST route to receive new note to add to the req.body and serve to the client
// DELETE route to delete a note by id

const uuid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
