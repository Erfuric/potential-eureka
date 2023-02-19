const path = require('path');

function sendIndex(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}

function sendNotes(req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
}

module.exports = { sendIndex, sendNotes };