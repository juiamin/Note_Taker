const express = require('express');

// import db source
const notes  = require('./db/notes.json');

//set up express app
const app = express();
const PORT = 3001;

//"/api/notes"
app.get('/api/notes',(req ,res) =>{
  res.json(notes);
});

app.listen(PORT,() => console.log('now listening on http://localhost: ${PORT}')
);

