'use client';

import React from 'react';
import Chip from '@mui/material/Chip';
import type { SxProps, Theme } from '@mui/material/styles';

interface BadgeProps {
  label: string;
  color?: 'default' | 'primary';
  sx?: SxProps<Theme>;
}

export default function Badge({ label, color = 'default', sx }: BadgeProps) {
  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      color={color === 'primary' ? 'primary' : 'default'}
      sx={{
        borderRadius: '4px',
        fontWeight: 500,
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        height: 24,
        borderColor: color === 'primary' ? 'primary.main' : 'divider',
        color: color === 'primary' ? 'primary.main' : 'text.secondary',
        ...sx,
      }}
    />
  );
}
