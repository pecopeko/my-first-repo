const express = require('express');
const router = express.Router();

const { handlePostSongs } = require('../controllers/songsController');

// /api/songs へのPOSTリクエストをhandlePostSongsで処理
router.post('/', handlePostSongs);

module.exports = router;