const fs = require('fs');
const express = require('express');

const PORT = 3001;
const app = express();

// GET HTML request routes
app.get('/notes', (req, res) => res.send('/db/views/notes.html'));
app.get('*', (req,res) => res.send('/db/views/index.html'));
// POST request
// Bonus: DELETE request

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
    );