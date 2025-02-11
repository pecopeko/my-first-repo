// src/pages/home.tsx
import React from 'react';
import { Container, Paper, Box, Typography } from '@mui/material';
import SongInput from '../features/songInput/SongInput';
import { useSongInput } from '../features/songInput/hooks';
import ActionButton from '../features/songInput/ActionButton';
import { sendSongs } from '../features/songInput/api'; // api.ts から sendSongs をインポート

const Home: React.FC = () => {
  // 得意な曲用の状態
  const { songTitle: bestSong, setSongTitle: setBestSong, reset: resetBestSong } = useSongInput();
  // 歌いたい曲用の状態
  const { songTitle: desiredSong, setSongTitle: setDesiredSong, reset: resetDesiredSong } = useSongInput();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 送信するデータをまとめる
    const payload = {
      bestSong,
      desiredSong,
    };

    try {
      // api.ts に定義した sendSongs を呼び出す
      const result = await sendSongs(payload);
      console.log('バックエンドからのレスポンス:', result);

      // 送信成功後、必要なら状態をリセットする
      resetBestSong();
      resetDesiredSong();
    } catch (error) {
      console.error('データ送信中にエラーが発生しました:', error);
    }
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
        {/* 送信ボタンのフォーム */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <ActionButton label="送信" type="submit" />
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;