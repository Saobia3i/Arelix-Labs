'use client';

import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface ArelixTextLogoProps {
  variant?: 'navbar' | 'footer';
  height?: number | string;
  sx?: object;
}

export default function ArelixTextLogo({
  variant = 'navbar',
  height = 28,
  sx = {},
}: ArelixTextLogoProps) {
  const theme = useTheme();
  const isFooter = variant === 'footer';

  // Footer always uses /images/arelix-text-logo.png as requested
  const logoSrc = isFooter
    ? '/images/arelix-text-logo.png'
    : theme.palette.mode === 'dark'
    ? '/images/arelix-text-logo-white.png'
    : '/images/arelix-text-logo.png';

  return (
    <Box
      component="img"
      src={logoSrc}
      alt="Arelix Labs"
      sx={{
        height: height,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        userSelect: 'none',
        ...sx,
      }}
    />
  );
}
