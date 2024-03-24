const express = require('express');
const PORT = 3001;
const path = require('path');
const index = require('./routes/api/index.js');
const app = express();
// GET route to return index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET route to return notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/notes.html'))
);

// DELETE route to delete a note by id

// const uuid = () => {
//   return Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
// };

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);
