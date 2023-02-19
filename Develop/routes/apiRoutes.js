const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');

router.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const newNote = req.body;
  newNote.id = uuid.v4();
  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const updatedNotes = notes.filter(note => note.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotes));
  res.json({ message: 'Note deleted' });
});

module.exports = router;