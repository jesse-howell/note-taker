const app = require('express').Router();
const notesData = require('./notes');

app.use('/api/notes', notesData);

module.exports = app;
