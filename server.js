// Import express package
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// require the JSON file
const data = require('./db/db.json');

const PORT = process.env.PORT || 3001;

// Create an instance of the express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// GET Route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))   
   );

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))   
   );

   app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
    );