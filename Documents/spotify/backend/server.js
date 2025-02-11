// server.js

// Express を読み込みます
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JSON のリクエストボディを解析するミドルウェアを設定
app.use(express.json());

// GET リクエストのエンドポイント（ルート）
app.get('/', (req, res) => {
  res.send('バックエンドが動いています！');
});

// POST リクエストのエンドポイント（/api/songs）
app.post('/api/songs', (req, res) => {
  const { bestSong, desiredSong } = req.body;
  console.log('受け取ったデータ:', { bestSong, desiredSong });
  // 必要ならここでデータベースへの保存などの処理を行います
  res.json({ success: true, message: 'データを受け取りました' });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});