 // src/features/songinput/songinput.tsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import SongInputField from './SongInputField';
import ActionButton from './ActionButton';
import styles from './songinput.module.css';

interface SongInputProps {
  onSubmit: (songTitle: string) => void;
}

const SongInput: React.FC<SongInputProps> = ({ onSubmit }) => {
  const [songTitle, setSongTitle] = useState('');

  // 入力値の更新
  const handleChange = (value: string) => {
    setSongTitle(value);
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = songTitle.trim();
    if (trimmed) {
      onSubmit(trimmed);
      setSongTitle('');
    }
  };

  // リセット時の処理（入力欄をクリア）
  const handleReset = () => {
    setSongTitle('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={styles.container}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <SongInputField value={songTitle} onChange={handleChange} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <ActionButton label="送信" type="submit" />
        <ActionButton label="リセット" type="button" onClick={handleReset} />
      </Box>
    </Box>
  );
};

export default SongInput;
