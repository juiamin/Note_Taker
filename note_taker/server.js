const express = require('express');
const fs = require('fs');
const path = require('path');

// import db source
const notes  = require('./db/notes.json');

//set up express app
const app = express();
const PORT = 2000;

//set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//"/api/notes"
app.get('/api/notes',(req ,res) =>{
  // let currentNotes = fs.readFile('./db/notes.json','utf8');
  res.json(notes);
});

app.post('/api/notes',(req,res)=>{
  const newNote ={ ...req.body};
 // newNote = notes.length;
console.log(newNote);

  notes.push(newNote);
  console.log(notes);
  fs.writeFile(path.join(__dirname,'./db/notes.json'),JSON.stringify({ notes },null,2),err=>{
    if (err){
      return res.status(500).json(err);
    }
    res.json(notes)
      
  });
  
});

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname,'./public/note.html'));
});

app.listen(PORT,() => console.log(`now listening on http://localhost: ${PORT}`)
);

