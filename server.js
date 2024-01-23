const fs = require('fs');
const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

app.use(db.json());
// GET HTML request routes
app.get('/notes', (req, res) => res.send('/views/notes.html'));
app.get('*', (req,res) => res.send('/views/index.html'));

// GET API request route
// app.get('/api/notes', (req, res) => res.json('/db/db.json'))
// POST API request route
// app.post('/api/notes')
// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );