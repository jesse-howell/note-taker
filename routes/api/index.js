const index = require('express').Router();
const notesRouter = require('./notes');

index.use('/routes/api/notes.js', notesRouter);

module.exports = index;
