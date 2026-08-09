'use client';

import React, { type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IconTileProps {
  icon: ReactNode;
  label: string;
  sublabel?: string;
}

export default function IconTile({ icon, label, sublabel }: IconTileProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 1.5,
        p: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1.5,
        transition: 'border-color 80ms ease',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
          '& svg': {
            strokeWidth: 1.5,
          },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{ fontSize: '0.95rem', fontWeight: 600, mb: 0.25 }}
        >
          {label}
        </Typography>
        {sublabel && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.82rem' }}>
            {sublabel}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
