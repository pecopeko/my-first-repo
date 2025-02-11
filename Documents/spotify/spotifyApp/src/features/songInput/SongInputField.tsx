// src/features/songinput/SongInputField.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface SongInputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const SongInputField: React.FC<SongInputFieldProps> = ({ value, onChange }) => {
  return (
    <TextField
      label="曲名"
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};

export default SongInputField;