// src/pages/home.tsx
import React from 'react';
import { Container, Paper, Box, Typography } from '@mui/material';
import SongInput from '../features/songInput/SongInput';
import { useSongInput } from '../features/songInput/hooks';
import ActionButton from '../features/songInput/ActionButton';

const Home: React.FC = () => {
  // 得意な曲用の状態
  const { songTitle: bestSong, setSongTitle: setBestSong, reset: resetBestSong } = useSongInput();
  // 歌いたい曲用の状態
  const { songTitle: desiredSong, setSongTitle: setDesiredSong, reset: resetDesiredSong } = useSongInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('得意な曲:', bestSong);
    console.log('歌いたい曲:', desiredSong);
    // 必要なら各フィールドのリセットも実施
    resetDesiredSong();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 4, mt: 8, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          曲入力フォーム
        </Typography>
        <Box sx={{ mt: 3 }}>
          <SongInput
            songTitle={bestSong}
            setSongTitle={setBestSong}
            resetSongTitle={resetBestSong}
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <SongInput
            songTitle={desiredSong}
            setSongTitle={setDesiredSong}
            resetSongTitle={resetDesiredSong}
          />
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <ActionButton label="送信" type="submit" />
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;