const express = require('express');
const path = require('path');
const notes = require('./routes/notes.js');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', notes);

app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT} 🚀`, 'the live app is at https://gentle-badlands-61765.herokuapp.com/')
);