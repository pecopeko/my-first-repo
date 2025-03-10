const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/songs', (req, res) => {
    const { songToSing, bestSong, songToSingArtist, bestSongArtist } = req.body;

    console.log('Received data:', {
        songToSing,
        bestSong,
        songToSingArtist,
        bestSongArtist
    });

    res.status(200).json({ message: 'Data received successfully' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});