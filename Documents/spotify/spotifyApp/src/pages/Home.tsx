 // src/pages/home.tsx
import React, { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';

const Home: React.FC = () => {
  // 各入力フィールドの状態を保持
  const [bestSong, setBestSong] = useState('');
  const [desiredSong, setDesiredSong] = useState('');

  // 得意な曲のリセット
  const handleResetBestSong = () => {
    setBestSong('');
  };

  // 歌いたい曲のリセット
  const handleResetDesiredSong = () => {
    setDesiredSong('');
  };

  // 送信時の処理（現状はコンソールに出力）
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('得意な曲:', bestSong);
    console.log('歌いたい曲:', desiredSong);
    // ここでバックエンドへの送信処理を追加する予定です
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          曲入力フォーム
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2} alignItems="center">
            {/* 得意な曲入力エリア */}
            <Grid item xs={12} sm={8}>
              <TextField
                label="得意な曲"
                variant="outlined"
                fullWidth
                value={bestSong}
                onChange={(e) => setBestSong(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleResetBestSong}
              >
                リセット
              </Button>
            </Grid>

            {/* 歌いたい曲入力エリア */}
            <Grid item xs={12} sm={8}>
              <TextField
                label="歌いたい曲"
                variant="outlined"
                fullWidth
                value={desiredSong}
                onChange={(e) => setDesiredSong(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleResetDesiredSong}
              >
                リセット
              </Button>
            </Grid>

            {/* 送信ボタン */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                送信
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
