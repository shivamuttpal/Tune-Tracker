// models/song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
});

module.exports = mongoose.model('Song', songSchema);
