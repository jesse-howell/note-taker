const fs = require('fs');
const express = require('express');

const PORT = 3001;
const app = express();

// GET request
app.get('/notes', (req, res) => res.send('db/views/notes.html'))

// POST request
// Bonus: DELETE request