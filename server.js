const express = require('express');
const PORT = 3001;
const path = require('path');
const app = require('./routes/api/index.js');
// const app = express();

app.use(express.json());
// app.use('./routes/api/index.js', api);
app.use(express.urlencoded({ extended: true }));
app.use(express.Router.use('/api/notes', require('./routes/api/notes.js')));

// GET route to return index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/index.html'))
);

// GET route to return notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/views/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);
