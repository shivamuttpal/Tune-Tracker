// routes/api.js
const express = require('express');
const router = express.Router();
const Song = require('../models/song');



// Create song
router.post('/songs', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all songs
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
