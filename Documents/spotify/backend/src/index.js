const express = require('express');
const songsRoute = require('./routes/songs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// JSONボディをパースするミドルウェア
app.use(express.json());

// ルーティング設定
app.use('/api/songs', songsRoute);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});