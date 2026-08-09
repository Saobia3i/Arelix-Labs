'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Sun, Moon } from 'lucide-react';
import { useColorMode } from '@/theme/ColorModeProvider';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        id="theme-toggle-btn"
        size="small"
        sx={{
          color: 'text.secondary',
          '&:hover': { color: 'primary.main' },
          transition: 'color 80ms ease',
        }}
      >
        {mode === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
      </IconButton>
    </Tooltip>
  );
}
