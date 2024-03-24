const express = require('express');
const PORT = 3001;
const path = require('path');
const api = require('./routes/api/index.js');
const app = express();

app.use('api', api);
// GET route to return index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET route to return notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/notes.html'))
);

// DELETE route to delete a note by id

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);
