// src/features/songinput/ActionButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface ActionButtonProps {
  label: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, type, onClick }) => {
  return (
    <Button variant="contained" type={type} onClick={onClick}>
      {label}
    </Button>
  );
};

export default ActionButton;