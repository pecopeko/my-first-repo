// src/features/songInput/SongInput.tsx
import React from 'react';
import SongInputField from './SongInputField';
import ActionButton from './ActionButton';
import { Box } from '@mui/material';

interface SongInputProps {
  songTitle: string;
  setSongTitle: React.Dispatch<React.SetStateAction<string>>;
  resetSongTitle: () => void;
}

const SongInput: React.FC<SongInputProps> = ({
  songTitle,
  setSongTitle,
  resetSongTitle,
}) => {

  return (
    <Box component="form">
      <SongInputField value={songTitle} onChange={setSongTitle} />
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <ActionButton label="リセット" type="button" onClick={resetSongTitle} />
      </Box>
    </Box>
  );
};

export default SongInput;