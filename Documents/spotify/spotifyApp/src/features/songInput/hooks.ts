// src/features/songinput/hooks.ts
import { useState } from 'react';

export const useSongInput = () => {
  const [songTitle, setSongTitle] = useState('');

  // ここに入力のバリデーションや送信処理などのロジックを追加することができます
  const reset = () => setSongTitle('');

  return {
    songTitle,
    setSongTitle,
    reset,
  };
};